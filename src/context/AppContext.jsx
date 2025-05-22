import React, { createContext, useState, useEffect } from "react"
// import products from "../data/products"
import useFetch from "../useFetch"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const {
    data: products,
    loading1,
    error,
  } = useFetch("http://localhost:5000/products")

  console.log(products)
  //----------------------------------
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      return JSON.parse(savedCart)
    }
    return []
  })

  //----------------------------------
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      return JSON.parse(savedWishlist)
    }
    return []
  })

  //----------------------------------
  const [loading, setLoading] = useState(false)

  //----------------------------------
  // Add address state
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("addresses")
    if (savedAddresses) {
      return JSON.parse(savedAddresses)
    }
    return []
  })

  const [selectedAddress, setSelectedAddress] = useState(() => {
    const savedSelectedAddress = localStorage.getItem("selectedAddress")
    if (savedSelectedAddress) {
      return JSON.parse(savedSelectedAddress)
    }
    return null
  })

  //----------------------------------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  //----------------------------------
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  //----------------------------------
  // addresses and selectedAddress to localStorage
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses))
  }, [addresses])

  useEffect(() => {
    localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress))
  }, [selectedAddress])

  //----------------------------------
  // Add to cart function
  const addToCart = (book) => {
    setCart((currentCart) => {
      alert("Do you want to add this book to the cart?")
      const bookInCart = currentCart.find((item) => item._id === book._id)
      if (bookInCart) {
        return currentCart.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...currentCart, { ...book, quantity: 1 }]
    })
  }

  //----------------------------------
  // Remove from cart
  const removeFromCart = (bookId) => {
    setCart((currentCart) => {
      alert("Do you want to remove this book from the cart?")
      return currentCart.filter((item) => item._id !== bookId)
    })
  }

  //----------------------------------
  // Update quantity
  const updateCartQuantity = (bookId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId)
    } else {
      setCart((currentCart) => {
        alert("Do you want to increase or decrease quantity in the cart?")
        return currentCart.map((item) => {
          if (item._id === bookId) {
            return { ...item, quantity: newQuantity }
          }
          return item
        })
      })
    }
  }

  //----------------------------------
  // Add to wishlist
  const addToWishlist = (book) => {
    setWishlist((currentWishlist) => {
      const bookInWishlist = currentWishlist.find(
        (item) => item._id === book._id
      )
      if (!bookInWishlist) {
        return [...currentWishlist, book]
      }
      return currentWishlist
    })
  }

  //----------------------------------
  // Remove from wishlist
  const removeFromWishlist = (bookId) => {
    setWishlist((currentWishlist) => {
      alert("Do you want remove this book from wishlist?")
      return currentWishlist.filter((item) => item._id !== bookId)
    })
  }

  //----------------------------------
  // Address management functions
  const addAddress = (address) => {
    setAddresses((currentAddresses) => [
      ...currentAddresses,
      { _id: Date.now(), ...address },
    ])
  }

  const updateAddress = (addressId, updatedAddress) => {
    setAddresses((currentAddresses) =>
      currentAddresses.map((addr) =>
        addr._id === addressId ? { ...addr, ...updatedAddress } : addr
      )
    )
  }

  const deleteAddress = (addressId) => {
    setAddresses((currentAddresses) =>
      currentAddresses.filter((addr) => addr._id !== addressId)
    )
    // If the deleted address was the selected one, clear the selection
    if (selectedAddress && selectedAddress._id === addressId) {
      setSelectedAddress(null)
    }
  }

  //----------------------------------
  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        addToWishlist,
        removeFromWishlist,
        loading,
        setLoading,
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        selectedAddress,
        setSelectedAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
