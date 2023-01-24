import useStore from "../store";

import ProductOneThumbnail from "../assets/image-product-1-thumbnail.jpg";
import IconDelete from "../assets/icon-delete.svg";

export default function CartItem() {
  const [quantity, setQuantity] = useStore((state) => [
    state.quantity,
    state.setQuantity,
  ]);

  const handleRemoveClick = () => {
    setQuantity(0);
  };

  return (
    <div className="cart--item">
      <div className="cart--item__image">
        <img src={ProductOneThumbnail} alt="Product" />
      </div>
      <div className="cart--item__details">
        <div className="cart--item__details__name">
          Fall Limited Edition Sneakers
        </div>
        <div className="cart--item__details__price">
          $125.00 x {quantity} <span>${125 * quantity}.00</span>
        </div>
      </div>
      <div className="cart--item__remove" onClick={handleRemoveClick}>
        <span>
          <img src={IconDelete} alt="Remove" />
        </span>
      </div>
    </div>
  );
}
