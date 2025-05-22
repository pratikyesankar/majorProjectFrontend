import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProductListing from "./pages/ProductListing"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:category" element={<ProductListing />} />
            <Route path="/product/:_id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
