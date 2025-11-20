import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import Checkout from '../pages/Checkout'

export default function LayoutRoutes(){
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
