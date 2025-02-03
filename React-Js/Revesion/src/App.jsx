import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cards from "./pages/Cards"
import Home from "./pages/Home"
import About from './pages/About'
import Contect from './pages/contect'


import Header from "./components/Header"


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/cards'  element={<Cards/>}/>
    <Route path='/about'  element={<About/>}/>
    <Route path='/contect' element={<Contect/>}/>
    
  
    </Routes>
    </>
    
  )
}

export default App