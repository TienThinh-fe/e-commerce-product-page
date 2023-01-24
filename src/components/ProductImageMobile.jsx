import "./styles.scss";

import ProductOne from "../assets/image-product-1.jpg";
import ProductTwo from "../assets/image-product-2.jpg";
import ProductThree from "../assets/image-product-3.jpg";
import ProductFour from "../assets/image-product-4.jpg";
import IconNext from "../assets/icon-next.svg";
import IconPrevious from "../assets/icon-previous.svg";

import { useState } from "react";

export default function ProductImageMobile() {
  const [preview, setPreview] = useState(ProductOne);

  const handleNextClick = () => {
    if (preview === ProductOne) {
      setPreview(ProductTwo);
    } else if (preview === ProductTwo) {
      setPreview(ProductThree);
    } else if (preview === ProductThree) {
      setPreview(ProductFour);
    } else if (preview === ProductFour) {
      setPreview(ProductOne);
    }
  };

  const handlePreviousClick = () => {
    if (preview === ProductOne) {
      setPreview(ProductFour);
    } else if (preview === ProductTwo) {
      setPreview(ProductOne);
    } else if (preview === ProductThree) {
      setPreview(ProductTwo);
    } else if (preview === ProductFour) {
      setPreview(ProductThree);
    }
  };

  return (
    <div className="product--image--mobile">
      <div className="product--image--mobile__preview">
        <img src={preview} alt="Product One" />
      </div>
      <div className="product--image--mobile__controls">
        <div
          onClick={handlePreviousClick}
          className="product--image--mobile__controls--previous"
        >
          <img src={IconPrevious} alt="Previous" />
        </div>
        <div
          onClick={handleNextClick}
          className="product--image--mobile__controls--next"
        >
          <img src={IconNext} alt="Next" />
        </div>
      </div>
    </div>
  );
}
