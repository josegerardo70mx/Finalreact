import { useState } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductsDetail from './pages/ProductsDetail'
import Purchases from './pages/Purchases'

function App() {
              const isloading = useSelector(state => state.isLoading )

  return (
<HashRouter>
    <NavBar />
  {isloading &&  <LoadingScreen />}
<Routes>

<Route path="/" element={<Home />}  />
<Route path="/product/:id" element={<ProductsDetail />}  />
<Route path="/purchases" element={<Purchases />}  />
<Route path="/cart" element={<Cart />}  />
<Route path="/login" element={<Login />}  />





































</Routes>
</HashRouter>
  )
}

export default App
