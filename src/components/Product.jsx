import "./styles.scss";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function Product() {
  return (
    <div className="product">
      <ProductImage />
      <ProductInfo />
    </div>
  );
}
