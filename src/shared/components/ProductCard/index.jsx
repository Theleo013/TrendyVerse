import React from "react";
import Styles from "@/shared/components/productCard/productCard.module.scss";
import StarRate from "../StarRate";
import { Link } from "react-router-dom";
import { addToBasket } from "@/redux/features/basketSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/redux/features/wishlistSlice";

const ProductCard = ({
  image,
  title,
  price,
  views,
  id,
  percent,
  customPercent,
  heartIcon,
  viewIcon,
  customIcons,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.contentContainer}>
        <div className={Styles.percentIconsContainer}>
          <div style={customPercent} className={Styles.cardPercent}>
            <span>{percent}</span>
          </div>
          <div style={customIcons} className={Styles.cardIcons}>
            <button
              onClick={() => {
                dispatch(addToWishlist({ image, title, price, views, id }));
                e.stopPropagation();
              }}
            >
              <img src={heartIcon} alt="heart-icon" />
            </button>
            <Link>
              <img src={viewIcon} alt="view-icon" />
            </Link>
          </div>
        </div>
        <div className={Styles.cardImage}>
          <Link to={`/product/${id}`}>
            <img src={image} alt={image} />
          </Link>
        </div>
        <div className={Styles.cardButton}>
          <button
            onClick={() => {
              dispatch(addToBasket({ image, title, price, views, id }));
              e.stopPropagation();
            }}
          >
            Add to Basket
          </button>
        </div>
      </div>

      <div className={Styles.productTitleContainer}>
        <Link to={`/product/${id}`}>
          <h3>{title}</h3>
        </Link>
        <div className={Styles.priceContainer}>
          <span>${price}</span>
          <span style={{ textDecoration: "line-through" }}>$130</span>
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
