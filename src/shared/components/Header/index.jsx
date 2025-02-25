import React from "react";
import Styles from "@/shared/components/Header/header.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
import { useSelector } from "react-redux";
import MenuBar from "../MenuBar";
import ProfileMenu from "../ProfileMenu";

const Header = () => {
  const { basket } = useSelector((state) => state.basket);
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <header>
      <nav className={Styles.headerNav}>
        <div className={Styles.headerLogoContainer}>
          <Link to={urls.HOME}>
            <img src="/assets/main-logo.svg" alt="main-logo" />
          </Link>
          <div className={Styles.menuBar}>
            <MenuBar />
          </div>
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
              <Link to={urls.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={urls.REGISTER}>Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className={Styles.headerContactContainer}>
          <div className={Styles.headerInput}>
            <input placeholder="What are you looking for?" type="text" />
            <img src="/assets/icons/search-icon.svg" alt="search-icon" />
          </div>
          <div className={Styles.headerBasketIcons}>
            <Link to={urls.WISHLIST}>
              <img src="/assets/icons/heart-icon.svg" alt="heart-icon" />
              {wishlist.length > 0 && (
                <div className={Styles.wishlistCount}>
                  <span>{wishlist?.length}</span>
                </div>
              )}
            </Link>
            <Link to={urls.BASKET}>
              <img src="/assets/icons/cart-icon.svg" alt="cart-icon" />

              {basket.length > 0 && (
                <div className={Styles.basketCount}>
                  <span>{basket?.length}</span>
                </div>
              )}
            </Link>
          </div>

          <div>
            <ProfileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
