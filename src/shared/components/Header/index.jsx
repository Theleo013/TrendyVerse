import React from "react";
import Styles from "@/shared/components/Header/header.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((state) => state.basket);
  return (
    <header>
      <nav className={Styles.headerNav}>
        <div className={Styles.headerLogoContainer}>
          <Link to={urls.HOME}>
            <img src="./src/assets/main-logo.svg" alt="main-logo" />
          </Link>
        </div>
        <div className={Styles.headerList}>
          <ul>
            <li>
              <Link to={urls.HOME}>Home</Link>
            </li>
            <li>
              <Link to={urls.CONTACT}>Contact</Link>
            </li>
            <li>
              <Link to={urls.ABOUt}>About</Link>
            </li>
            <li>
              <Link to={urls.REGISTER}>Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className={Styles.headerContactContainer}>
          <div className={Styles.headerInput}>
            <input placeholder="What are you looking for?" type="text" />
            <img src="./src/assets/icons/search-icon.svg" alt="search-icon" />
          </div>
          <div className={Styles.headerBasketIcons}>
            <Link>
              <img src="./src/assets/icons/heart-icon.svg" alt="heart-icon" />
            </Link>
            <Link to={urls.BASKET}>
              <img src="./src/assets/icons/cart-icon.svg" alt="cart-icon" />
              <div className={Styles.basketCount}>
                <span>{basket?.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
