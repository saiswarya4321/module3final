import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Components/Products'
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Home from './Components/Home'
import Header from './Components/Header'
import ProductDetails from './Components/ProductDetails'
import Cartpage from './Components/Cartpage'
import Footer from './Components/Footer'
import Product from './Components/Product'
import axios from 'axios'

function App() {
 const [pros,setPros]=useState([])
 const[searchQuery,setSearchquery]=useState("")
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then(res=>{
    setPros(res.data)
  })
},[]);


  return (
    <>
    <BrowserRouter>
    <Header setSearchQuery={setSearchquery} searchQuery={searchQuery}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='productdetails/:productid' element={<ProductDetails/>}></Route>
      <Route path='cartpage' element={<Cartpage/>}></Route>
      <Route path='product' element={<Product pros={pros} searchQuery={searchQuery}/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
