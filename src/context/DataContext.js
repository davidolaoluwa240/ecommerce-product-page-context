// Modules
import { createContext, useState } from "react";
import { productData } from "../data/data";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [product] = useState(productData);
  const [cart, setCart] = useState({});

  const addToCart = function (quantityNumber) {
    if (quantityNumber) {
      let newCart;
      // When cart has some keys. Just increment the quantity
      if (Object.keys(cart).length) {
        newCart = { ...cart, qty: cart.qty + quantityNumber };
      } else {
        // When the cart object is empty then spread the product and increment the counter
        newCart = { ...product, qty: quantityNumber };
      }
      setCart(newCart);
    }
  };

  const deleteCartItem = function () {
    // Set cart object to be empty
    setCart({});
  };

  return (
    <DataContext.Provider
      value={{
        product,
        cart,
        setCart,
        addToCart,
        deleteCartItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
