import React from "react";
import Styles from "@/shared/components/CategoryCard/categoryCard.module.scss";
import StarRate from "../StarRate";
import { Link } from "react-router-dom";
import { addToBasket } from "@/redux/features/basketSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/redux/features/wishlistSlice";
import heartRedIcon from "/assets/icons/heartRed-icon.svg";
import { urls } from "@/shared/urls";
const CategoryCard = ({
  image,
  title,
  description,
  price,
  views,
  id,
  percent,
  customPercent,
  heartIcon,

  customIcons,
}) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <div className={Styles.categoryContainer}>
      <div className={Styles.categoryContentContainer}>
        <div className={Styles.percentIconsContainer}>
          <div style={customPercent} className={Styles.cardPercent}>
            <span>{percent}</span>
          </div>
          <div style={customIcons} className={Styles.cardIcons}>
            <button
              onClick={() => {
                dispatch(addToWishlist({ image, title, price, views, id }));
                setIsLiked(!isLiked);
              }}
            >
              <img src={isLiked ? heartRedIcon : heartIcon} alt="heart-icon" />
            </button>
          </div>
        </div>
        <div className={Styles.categoryCardImage}>
          <Link>
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
        <Link>
          <h3>{title}</h3>
        </Link>
        <Link>
          <p>{description}</p>
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

export default CategoryCard;
