// Modules
import { useContext } from "react";

// Store
import DataContext from "../../../context/DataContext";

// Components
import CartProductItem from "./CartProductItem";

const CartProduct = () => {
  const { cart, deleteCartItem } = useContext(DataContext);

  return (
    <div className="cart__products">
      <CartProductItem cartProduct={cart} deleteCartItem={deleteCartItem} />
      <button className="cart__products-btn btn">Checkout</button>
    </div>
  );
};

CartProduct.defaultProps = {
  cart: {},
};

export default CartProduct;
