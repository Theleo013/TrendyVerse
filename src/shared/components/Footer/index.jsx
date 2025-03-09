import React from "react";
import Styles from "@/shared/components/Footer/footer.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";

const Footer = () => {
  return (
    <footer className={Styles.footerContainer}>
      <div className={Styles.innerContainer}>
        <div className={Styles.sectionLogo}>
          <div className={Styles.trendyVerse}>
            <h3>TrendyVerse</h3>
            <Link>Subscribe</Link>
            <Link>Get 10% off your first order</Link>
          </div>
          {/* <div className={Styles.inputContainer}>
            <input placeholder="Enter your email" type="text" />
            <img src="/assets/icons/send-icon.svg" alt="send-icon" />
          </div> */}
        </div>
        <div className={Styles.sectionSupport}>
          <h3>Support</h3>
          <span>Narimanov region, Baku city, Azarbaijan </span>
          <span>TrendyVerse@gmail.com</span>
          <span>+994-12-111-22-33</span>
        </div>
        <div className={Styles.sectionAccount}>
          <h3>Account</h3>
          <Link to={urls.PROFILE}>My Account</Link>
          <Link to={urls.REGISTER}>Login / Register</Link>
          <Link to={urls.BASKET}>Cart</Link>
          <Link to={urls.WISHLIST}>Wishlist</Link>
          <Link to={urls.HOME}>Shop</Link>
        </div>
        <div className={Styles.sectionQuickLink}>
          <h3>Quick Link</h3>
          <Link>Privacy Policy</Link>
          <Link>Terms Of Use</Link>
          <Link>FAQ</Link>
          <Link to={urls.CONTACT}>Contact</Link>
        </div>
        <div className={Styles.sectionSocial}>
          <div className={Styles.description}>
            <h3>Social</h3>
            <span>Visit My Social Media</span>
          </div>
          <div className={Styles.githubQR}>
            <img src="/assets/icons/GithubQR.png" alt="GithubQR" />
          </div>
          <div className={Styles.social}>
            <Link to={"https://github.com/Theleo013"}>
              <img src="/assets/icons/Github.svg" alt="github" />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/el%C3%A7in-m%C9%99mm%C9%99dov-915188305/"
              }
            >
              <img src="/assets/icons/Linkedin.png" alt="linkedin" />
            </Link>
            <img src="/assets/icons/X_icon.svg" alt="X" />
            <img src="/assets/icons/Facebook.png" alt="facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
