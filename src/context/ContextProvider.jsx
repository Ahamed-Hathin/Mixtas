import React, { createContext, useState } from "react";
import { Products } from "../assets/assets.js";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hoverIndex, setHoverIndex] = useState("");

  const product = Products.filter(
    (item) => item.category !== "recomended"
  );

  const toggleCart = (product) => {
    const exists = cartItems.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // ✅ ABSOLUTELY SAFE TOTAL (NO replace() ON NUMBER)
  const totalItem = cartItems.reduce((sum, item) => {
    if (item.price == null) return sum;

    let price = 0;

    if (typeof item.price === "number") {
      price = item.price;
    } else if (typeof item.price === "string") {
      price = Number(item.price.replace(/[^0-9.]/g, ""));
    }

    return sum + price;
  }, 0);

  const handleSearch = (text) => {
    setSearchText(text);

    if (!text) {
      setSearchResult([]);
      return;
    }

    const filtered = product.filter(
      (item) =>
        item.name?.toLowerCase().includes(text.toLowerCase()) ||
        item.dec?.toLowerCase().includes(text.toLowerCase())
    );

    setSearchResult(filtered);
  };

  return (
    <MyContext.Provider
      value={{
        cartItems,
        toggleCart,
        totalItem,
        searchText,
        handleSearch,
        searchResult,
        hoverIndex,
        setHoverIndex,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
