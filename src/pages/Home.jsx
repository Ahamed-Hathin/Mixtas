import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/commonPageComponents/Navbar';
import Caurosall from '../components/homePageComponents/Caurosall';
import Slider from '../components/homePageComponents/Slider';
import New_Arrivals from '../components/homePageComponents/New_Arrivals';
import Popular_Products from '../components/homePageComponents/Popular_Products';
import Footer from '../components/commonPageComponents/Footer';
import ChatBot from '../components/Chatbot/ChatBot';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect logic disabled to prevent infinite loop since no login page is defined
    /*
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/"); // go back to login page
    }
    */
  }, [navigate]);

  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '20px' }}>
        <ChatBot />
        <Caurosall />
        <Slider />
        <New_Arrivals />
        <Popular_Products />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
