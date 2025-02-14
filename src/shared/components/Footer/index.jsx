import React from "react";
import Styles from "@/shared/components/Footer/footer.module.scss";
import { Link } from "react-router-dom";

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
          <div className={Styles.inputContainer}>
            <input placeholder="Enter your email" type="text" />
            <img src="./src/assets/icons/send-icon.svg" alt="send-icon" />
          </div>
        </div>
        <div className={Styles.sectionSupport}>
          <h3>Support</h3>
          <span>Narimanov region, Baku city, Azarbaijan </span>
          <span>TrendyVerse@gmail.com</span>
          <span>+994-12-111-22-33</span>
        </div>
        <div className={Styles.sectionAccount}>
          <h3>Account</h3>
          <Link>My Account</Link>
          <Link>Login / Register</Link>
          <Link>Cart</Link>
          <Link>Wishlist</Link>
          <Link>Shop</Link>
        </div>
        <div className={Styles.sectionQuickLink}>
          <h3>Quick Link</h3>
          <Link>Privacy Policy</Link>
          <Link>Terms Of Use</Link>
          <Link>FAQ</Link>
          <Link>Contact</Link>
        </div>
        <div className={Styles.sectionSocial}>
          <div className={Styles.description}>
            <h3>Social</h3>
            <span>Visit My Social Media</span>
          </div>
          <div className={Styles.githubQR}>
            <img src="./src/assets/icons/GithubQR.png" alt="GithubQR" />
          </div>
          <div className={Styles.social}>
            <img src="./src/assets/icons/Github.svg" alt="github" />
            <img src="./src/assets/icons/Linkedin.png" alt="linkedin" />
            <img src="./src/assets/icons/X_icon.svg" alt="X" />
            <img src="./src/assets/icons/Facebook.png" alt="facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
