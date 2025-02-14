import React from "react";
import Styles from "@/shared/components/productCard/productCard.module.scss";
import StarRate from "../StarRate";
import { Link } from "react-router-dom";
import { addToBasket } from "@/redux/features/basketSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ image, title, price, views, id }) => {
  const dispach = useDispatch();
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.contentContainer}>
        <div className={Styles.percentIconsContainer}>
          <div className={Styles.cardPercent}>
            <span>30%</span>
          </div>
          <div className={Styles.cardIcons}>
            <Link>
              <img src="./src/assets/icons/heart-icon2.svg" alt="heart-icon" />
            </Link>
            <Link>
              <img src="./src/assets/icons/view-icon.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className={Styles.cardImage}>
          <img src={image} alt={image} />
        </div>
        <div className={Styles.cardButton}>
          <button
            onClick={() =>
              dispach(addToBasket({ image, title, price, views, id }))
            }
          >
            Add to Basket
          </button>
        </div>
      </div>

      <div className={Styles.productTitleContainer}>
        <div>
          <h3>{title}</h3>
        </div>
        <div className={Styles.priceContainer}>
          <span>{price}</span>
          <span style={{ textDecoration: "line-through" }}>130</span>
        </div>
        <div className={Styles.rateContainer}>
          <StarRate />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
