import React from "react";
import Styles from "@/shared/components/Header/header.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
import { useSelector } from "react-redux";
import ProfileMenu from "../ProfileMenu";
import SearchBar from "../SearchBar";
import BurgerMenu from "../BurgerMenu";
import SearchMenu from "../SearchMenu";

const Header = () => {
  const { basket } = useSelector((state) => state.basket);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);
  console.log("user:", user);

  return (
    <header>
      <nav className={Styles.headerNav}>
        <div className={Styles.menuContainer}>
          <div className={Styles.headerLogo}>
            <Link to={urls.HOME}>
              <img src="/assets/main-logo.svg" alt="main-logo" />
            </Link>
          </div>
          <div className={Styles.burgerMenuContainer}>
            <BurgerMenu />
          </div>
          <div className={Styles.searchMenuContainer}>
            <SearchMenu />
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
            {user ? null : (
              <li>
                <Link to={urls.REGISTER}>Sign Up</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={Styles.headerContactContainer}>
          <div className={Styles.headerInput}>
            <SearchBar />
          </div>
          <div className={Styles.headerIcons}>
            <div>
              <Link to={urls.WISHLIST}>
                <div className={Styles.wishlistIcon}>
                  <img src="/assets/icons/heart-icon.svg" alt="heart-icon" />
                  {wishlist.length > 0 && (
                    <span className={Styles.wishlistCount}>
                      {wishlist?.length}
                    </span>
                  )}
                </div>
              </Link>
            </div>
            <div>
              <Link to={urls.BASKET}>
                <div className={Styles.basketIcon}>
                  <img src="/assets/icons/cart-icon.svg" alt="cart-icon" />
                  {basket.length > 0 && (
                    <span className={Styles.basketCount}>{basket?.length}</span>
                  )}
                </div>
              </Link>
            </div>
            <div
              className={Styles.profileMenu}
              style={!user ? { opacity: 0, visibility: "hidden" } : {}}
            >
              <ProfileMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
