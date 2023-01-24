import Logo from "../assets/logo.svg";
import CartIcon from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";

import "./styles.scss";

import { useState } from "react";
import useStore from "../store";
import Cart from "./Cart";

export default function Nav() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const quantity = useStore((state) => state.quantity);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav__links">
        <ul className="nav__links--list">
          <li className="nav__links--item">
            <a href="#">Collections</a>
          </li>
          <li className="nav__links--item">
            <a href="#">Men</a>
          </li>
          <li className="nav__links--item">
            <a href="#">Women</a>
          </li>
          <li className="nav__links--item">
            <a href="#">About</a>
          </li>
          <li className="nav__links--item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav__cart">
        <img
          src={CartIcon}
          onClick={handleCartIconClick}
          className="nav__cart--icon"
        />
        {isCartOpen && <Cart />}
        {quantity > 0 && <div className="nav__cart--quantity">{quantity}</div>}
      </div>
      <div className="nav__avatar">
        <img src={Avatar} />
      </div>
    </div>
  );
}