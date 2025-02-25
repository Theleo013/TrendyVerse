import React from "react";
import Styles from "@/pages/Wishlist/wishlist.module.scss";
import { useSelector } from "react-redux";
import ProductCard from "@/shared/components/ProductCard";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/redux/features/basketSlice";
import {
  removeFromWishlist,
  clearWishlist,
} from "@/redux/features/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  console.log("data", wishlist);

  const handleMoveAllToBasket = () => {
    wishlist.forEach((item) => {
      dispatch(addToBasket(item));
    });
    dispatch(clearWishlist());
  };
  return (
    <div className={Styles.wishlistContainer}>
      <div className={Styles.sectionHeading}>
        <span>Wishlist ({wishlist.length})</span>
        <button onClick={() => dispatch(handleMoveAllToBasket)}>
          Move All To Basket
        </button>
      </div>
      <div className={Styles.wishlistProducts}>
        {wishlist?.map((item) => {
          return (
            <div className={Styles.wishlistContentContainer}>
              <div className={Styles.wishlistProductWrapper}>
                <ProductCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  customPercent={{ display: "none" }}
                  customIcons={{ display: "none" }}
                />
              </div>
              <div className={Styles.wishlistRemoveIcon}>
                <button onClick={() => dispatch(removeFromWishlist(item))}>
                  <img src="/assets/icons/rubbish-icon.svg" alt="remive-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.wishlistClear}>
        <button onClick={() => dispatch(clearWishlist(wishlist))}>
          Clear Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
