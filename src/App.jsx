import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PRoducts from "./pages/PRoducts";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<PRoducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

