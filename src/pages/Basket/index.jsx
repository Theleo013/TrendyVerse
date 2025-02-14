import React, { useEffect } from "react";
import Styles from "@/pages/Basket/basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  decreasedFromBasket,
  addToBasket,
  clearBasket,
  getTotals,
} from "@/redux/features/basketSlice";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
const Basket = () => {
  const { basket, basketTotalPrice } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [basket]);

  return (
    <div className={Styles.basketContainer}>
      <div className={Styles.basketNav}>
        <Link className={Styles.homeLink} to={urls.HOME}>
          Home
        </Link>
        /
        <Link className={Styles.basketLink} to={urls.BASKET}>
          Basket
        </Link>
      </div>
      <div>
        {basket?.length === 0 ? (
          <div className={Styles.basketEmpty}>
            <h3>Your basket is empty</h3>
            <div className={Styles.startShopping}>
              <Link to={urls.HOME}> &larr; Start Shopping</Link>
            </div>
          </div>
        ) : (
          <div className={Styles.basketProduct}>
            <div className={Styles.basketTitle}>
              <span>Product</span>
              <span className={Styles.titlePrice}>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            <div className={Styles.basketItems}>
              {basket?.map((item) => (
                <div key={item.id} className={Styles.basketItemContainer}>
                  <div className={Styles.basketContentContainer}>
                    <div className={Styles.contentImage}>
                      <div className={Styles.imageContainer}>
                        <img src={item.image} alt={item.image} />
                      </div>
                      <div className={Styles.removeButton}>
                        <button
                          onClick={() => dispatch(removeFromBasket(item))}
                        >
                          <img
                            src="./src/assets/icons/remove-icon.svg"
                            alt="remove-icon"
                          />
                        </button>
                      </div>
                    </div>
                    <div className={Styles.contentTitle}>
                      <span>{item.title}</span>
                    </div>
                  </div>
                  <div className={Styles.priceContainer}>
                    <span>${item.price}</span>
                  </div>
                  <div className={Styles.quantityContainer}>
                    <button onClick={() => dispatch(decreasedFromBasket(item))}>
                      -
                    </button>
                    <span>{item.basketQuantity}</span>
                    <button onClick={() => dispatch(addToBasket(item))}>
                      +
                    </button>
                  </div>
                  <div className={Styles.totalContainer}>
                    $ {Number(item.price) * item.basketQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className={Styles.basketSummary}>
              <div className={Styles.clearButton}>
                <button onClick={() => dispatch(clearBasket(basket))}>
                  Clear Basket
                </button>
              </div>
              <div className={Styles.basketCheckout}>
                <div className={Styles.subTotal}>
                  <span>Subtotal</span>
                  <span className={Styles.amount}>${basketTotalPrice}</span>
                </div>
                <div className={Styles.description}>
                  <p>shipping at calculate</p>
                </div>
                <div className={Styles.checkoutButton}>
                  <button>Checkout</button>
                </div>
                <div className={Styles.startShopping}>
                  <Link to={urls.HOME}> &larr; Start Shopping</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
