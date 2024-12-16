import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <Context.Provider
      value={{ count, setCount, wishlist, setWishlist, cart, setCart }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
