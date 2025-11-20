import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import Checkout from '../pages/Checkout'
import Product from '../pages/Product'

export default function AppRoutes(){
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  )
}
