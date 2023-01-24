import "./styles.scss";

import useStore from "../store";

import CartItem from "./CartItem";

export default function Cart() {
  const quantity = useStore((state) => state.quantity);
  return (
    <div className="nav__cart--modal">
      <div className="nav__cart--modal__header">
        <span>Cart</span>
      </div>
      {quantity === 0 ? (
        <div className="nav__cart--modal__empty">Your cart is empty</div>
      ) : (
        <div className="nav__cart--modal__items">
          <CartItem />
          <div className="nav__cart--modal__items--checkout">Checkout</div>
        </div>
      )}
    </div>
  );
}
