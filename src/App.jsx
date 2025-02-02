import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductId from './Components/ProductId/ProductId'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products/:id' element={<ProductId/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
   </>
  )
}

export default App
