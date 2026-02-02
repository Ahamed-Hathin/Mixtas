// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";        // your existing Home
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./pages/AdminDashboard";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import PRoducts from "./pages/PRoducts";

function App() {
  return (
    <BrowserRouter>
        <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/home" element={<Home />} />

  <Route path="/about" element={<About />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/product/:id" element={<PRoducts />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/admin-login" element={<AdminLogin />} />
  <Route path="/admin-dashboard" element={<AdminDashboard />} />

</Routes>

    </BrowserRouter>
  );
}

export default App;
