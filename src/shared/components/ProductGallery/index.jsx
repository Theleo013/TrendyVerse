import React, { useState } from "react";
import Styles from "@/shared/components/ProductGallery/productgallery.module.scss";
import image1 from "/assets/images/products/RGBCooler.png";
import image2 from "/assets/images/products/GP11Gamepad.png";
import image3 from "/assets/images/products/CanonCamera.png";

const ProductGallery = ({ image }) => {
  const imageGallery = [
    image,
    `${image1}?v=1`,
    `${image2}?v=2`,
    `${image3}?v=3`,
  ];
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className={Styles.galleryContainer}>
      <div className={Styles.galleryWrapper}>
        <div className={Styles.galleryContent}>
          <div>
            <img
              onClick={(e) => setCurrentImage(1)}
              width={100}
              height={100}
              src={imageGallery[1]}
              alt={imageGallery[1]}
            />
          </div>
          <div>
            <img
              onClick={(e) => setCurrentImage(2)}
              width={100}
              height={100}
              src={imageGallery[2]}
              alt={imageGallery[2]}
            />
          </div>
          <div>
            <img
              onClick={(e) => setCurrentImage(3)}
              width={100}
              height={100}
              src={imageGallery[3]}
              alt={imageGallery[3]}
            />
          </div>
        </div>
        <div className={Styles.currentImage}>
          <img
            width={300}
            height={300}
            src={imageGallery[currentImage]}
            alt={imageGallery[currentImage]}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductGallery;
