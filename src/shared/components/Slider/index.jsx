import React from "react";
import Styles from "@/shared/components/Slider/slider.module.scss";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const Slider = () => {
  return (
    <React.Fragment>
      <Carousel arrows infinite={false}>
        <div>
          <div className={Styles.contentStyle}>
            <div className={Styles.productTitle}>
              <h3>Iphone 16</h3>
            </div>
            <div className={Styles.imageContainer}>
              <img src="./src/assets/images/sliderImage/iphone16.png" />
            </div>
            <div className={Styles.shopButton}>
              <Link>Buy now &rarr;</Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className={Styles.contentStyle}>
            <div className={Styles.productTitle}>
              <h3>Samsung s25</h3>
            </div>
            <div className={Styles.imageContainer}>
              <img src="./src/assets/images/sliderImage/sam25.png" />
            </div>
            <div className={Styles.shopButton}>
              <Link>Buy now &rarr;</Link>
            </div>
          </h3>
        </div>
        <div>
          <h3 className={Styles.contentStyle}>
            <div className={Styles.productTitle}>
              <h3>Xiaomi 15</h3>
            </div>
            <div className={Styles.imageContainer}>
              <img src="./src/assets/images/sliderImage/xiaomi15.png" />
            </div>
            <div className={Styles.shopButton}>
              <Link>Buy now &rarr;</Link>
            </div>
          </h3>
        </div>
        <div>
          <h3 className={Styles.contentStyle}>
            <div className={Styles.productTitle}>
              <h3>Lenovo 15</h3>
            </div>
            <div className={Styles.imageContainer}>
              <img src="./src/assets/images/sliderImage/lenovo15rs.png" />
            </div>
            <div className={Styles.shopButton}>
              <Link>Buy now &rarr;</Link>
            </div>
          </h3>
        </div>
      </Carousel>
    </React.Fragment>
  );
};

export default Slider;
