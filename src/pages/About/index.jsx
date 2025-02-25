import React from "react";
import Styles from "@/pages/About/about.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
import AboutSlider from "@/shared/components/Sliders/AboutSlider";
import DeliveryCard from "@/shared/components/DeliveryCard";

const About = () => {
  return (
    <div className={Styles.aboutContainer}>
      <div className={Styles.aboutNavigateLinks}>
        <Link className={Styles.linkToHome} to={urls.HOME}>
          Home
        </Link>
        /
        <Link className={Styles.linkToAbout} to={urls.ABOUt}>
          About
        </Link>
      </div>
      <div className={Styles.aboutMainContent}>
        <div className={Styles.aboutContentWrapper}>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className={Styles.aboutMainImage}>
          <img src="/assets/images/About-image.png" alt="About-Image" />
        </div>
      </div>
      <div className={Styles.ratingSection}>
        <div className={Styles.ratingCard}>
          <img
            src="/assets/icons/AboutIcons/store-icon.svg
"
            alt=""
          />
          <span>10.5k</span>
          <p>Sallers active our site</p>
        </div>
        <div className={Styles.ratingCard}>
          <img
            src="/assets/icons/AboutIcons/dollar-icon.svg
"
            alt=""
          />
          <span>33k</span>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div className={Styles.ratingCard}>
          <img
            src="/assets/icons/AboutIcons/cart-icon.svg
"
            alt=""
          />
          <span>45.5k</span>
          <p>Customer active in our site</p>
        </div>
        <div className={Styles.ratingCard}>
          <img
            src="/assets/icons/AboutIcons/moneyBag-icon.svg
"
            alt=""
          />
          <span>25k</span>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
      <div className={Styles.aboutCardSection}>
        <AboutSlider />
      </div>
      <div>
        <DeliveryCard />
      </div>
    </div>
  );
};

export default About;
