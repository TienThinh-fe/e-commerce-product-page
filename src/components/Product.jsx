import "./styles.scss";

import ProductImage from "./ProductImage";
import ProductImageMobile from "./ProductImageMobile";
import ProductInfo from "./ProductInfo";

import { useMediaQuery } from "react-responsive";

export default function Product() {
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });

  return (
    <div className="product">
      {isMobile ? <ProductImageMobile /> : <ProductImage />}
      <ProductInfo />
    </div>
  );
}
