import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"

function ProductDetail() {
  const { products, addToCart, addToWishlist, loading, fetchError } =
    useContext(AppContext)
  const { _id } = useParams()
  const product = products.find((p) => p._id === _id)

  // Handle loading and error states
  if (loading) return <div className="container my-5">Loading...</div>
  if (fetchError)
    return <div className="container my-5">Error: {fetchError.message}</div>
  if (!product) return <div className="container my-5">Product not found</div>

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating} ⭐</p>
          <p>{product.description}</p>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => addToWishlist(product)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
