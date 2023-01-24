import "./styles.scss";

import ProductOne from "../assets/image-product-1.jpg";
import ProductTwo from "../assets/image-product-2.jpg";
import ProductThree from "../assets/image-product-3.jpg";
import ProductFour from "../assets/image-product-4.jpg";
import ProductOneThumbnail from "../assets/image-product-1-thumbnail.jpg";
import ProductTwoThumbnail from "../assets/image-product-2-thumbnail.jpg";
import ProductThreeThumbnail from "../assets/image-product-3-thumbnail.jpg";
import ProductFourThumbnail from "../assets/image-product-4-thumbnail.jpg";

import { useState } from "react";

export default function ProductImage() {
  const [preview, setPreview] = useState(ProductOne);
  const [activeImage, setActiveImage] = useState(1);

  const handleThumbnailClick = (e) => {
    const { alt } = e.target;
    const OrderNumberOfImage = alt.split(" ")[1];
    switch (OrderNumberOfImage) {
      case "One":
        setPreview(ProductOne);
        setActiveImage(1);
        break;
      case "Two":
        setPreview(ProductTwo);
        setActiveImage(2);
        break;
      case "Three":
        setPreview(ProductThree);
        setActiveImage(3);
        break;
      case "Four":
        setPreview(ProductFour);
        setActiveImage(4);
        break;
      default:
        setPreview(ProductOne);
        setActiveImage(1);
    }
  };

  const isThumbnailActive = (imageNumber) => {
    return imageNumber === activeImage ? "active" : "";
  };

  return (
    <div className="product--image">
      <div className="product--image__preview">
        <img src={preview} alt="Product One" />
      </div>
      <div className="product--image__thumbnail">
        <ul>
          <li className={isThumbnailActive(1)}>
            <img
              src={ProductOneThumbnail}
              alt="Product One Thumbnail"
              onClick={handleThumbnailClick}
            />
          </li>
          <li className={isThumbnailActive(2)}>
            <img
              src={ProductTwoThumbnail}
              alt="Product Two Thumbnail"
              onClick={handleThumbnailClick}
            />
          </li>
          <li className={isThumbnailActive(3)}>
            <img
              src={ProductThreeThumbnail}
              alt="Product Three Thumbnail"
              onClick={handleThumbnailClick}
            />
          </li>
          <li className={isThumbnailActive(4)}>
            <img
              src={ProductFourThumbnail}
              alt="Product Four Thumbnail"
              onClick={handleThumbnailClick}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
