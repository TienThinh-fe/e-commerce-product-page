import "./styles.scss";
import { ReactComponent as IconCart } from "../assets/icon-cart.svg";

import useStore from "../store";
import { useState } from "react";

export default function ProductButton() {
  const setQuantity = useStore((state) => state.setQuantity);
  const [tempQuantity, setTempQuantity] = useState(0);

  const handleMinusClick = () => {
    if (tempQuantity > 0) {
      setTempQuantity(tempQuantity - 1);
    }
  };

  const handlePlusClick = () => {
    setTempQuantity(tempQuantity + 1);
  };

  const handleAddToCart = () => {
    setQuantity(tempQuantity);
  };

  return (
    <div className="product--button">
      <div className="product--button__quantity">
        <div
          className="product--button__quantity__minus"
          onClick={handleMinusClick}
        >
          -
        </div>
        <div className="product--button__quantity__value">{tempQuantity}</div>
        <div
          className="product--button__quantity__plus"
          onClick={handlePlusClick}
        >
          +
        </div>
      </div>
      <div className="product--button__add" onClick={handleAddToCart}>
        <span>
          <IconCart fill="white" />
        </span>
        Add to cart
      </div>
    </div>
  );
}
