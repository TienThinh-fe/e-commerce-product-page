import "./styles.scss";

import ProductButton from "./ProductButton";

export default function ProductInfo() {
  return (
    <div className="product--info">
      <div className="product--info__title">Sneaker company</div>
      <div className="product--info__name">Fall Limited Edition Sneakers</div>
      <div className="product--info__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </div>
      <div className="product--info__price">
        <div className="product--info__price--discounted-price">$125.00</div>
        <span className="product--info__price--discount">50%</span>
        <div className="product--info__price--og-price">$250.00</div>
      </div>
      <ProductButton />
    </div>
  );
}
