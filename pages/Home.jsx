import React from 'react'
import Navbar from '../components/commonPageComponents/Navbar'
import Caurosall from '../components/homePageComponents/Caurosall'
import Slider from '../components/homePageComponents/Slider'
import New_Arrivals from '../components/homePageComponents/New_Arrivals'
import Popular_Products from '../components/homePageComponents/Popular_Products'
import Footer from '../components/commonPageComponents/Footer'
import ChatBot from '../components/Chatbot/ChatBot'

const Home = () => {
  return (
    <>
     <Navbar/>
     <ChatBot/>
     <Caurosall/>
     <Slider/>
     <New_Arrivals/>
    <Popular_Products/>
    <Footer/>
    </>
  )
}

export default Home