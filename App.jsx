
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PRoducts from './pages/PRoducts'
import Shop from './pages/Shop'
import About from './pages/About'
import Faq from './pages/Faq'
import { Error } from './pages/Error'
import Contact from './pages/Contact'
import ContextProvider from './context/ContextProvider'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>        
          <Route path='/product/:id' element={<PRoducts/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Faq' element={<Faq/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </ContextProvider>
    </BrowserRouter>

    
      
      
    </>
  )
}

export default App