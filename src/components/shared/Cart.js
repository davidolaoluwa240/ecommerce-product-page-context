// Modules
import { useContext } from "react";

// Store
import DataContext from "../../context/DataContext";

// Components
import CartProduct from "../ui/Cart/CartProduct";

const Cart = () => {
  const { cart } = useContext(DataContext);

  return (
    <div className="cart">
      <header className="cart__header">
        <p className="cart__heading">Cart</p>
      </header>
      <div className="cart__content">
        {!Object.keys(cart).length && (
          <p className="cart__empty">Your cart is empty</p>
        )}
        {!!Object.keys(cart).length && <CartProduct />}
      </div>
    </div>
  );
};

export default Cart;
