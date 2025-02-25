import React from "react";
import { Link } from "react-router-dom";
import Styles from "@/shared/components/CategoryMenu/categoryMenu.module.scss";

const CategoryMenu = () => {
  return (
    <div className={Styles.categoryMenuContainer}>
      <Link className={Styles.contentWrapper}>
        <img src="/assets/icons/CategoryMenu/Phones.svg" alt="phones-icon" />
        <h4>Phones</h4>
      </Link>
      <Link className={Styles.contentWrapper}>
        <img
          src="/assets/icons/CategoryMenu/Computer.svg"
          alt="computer-icon"
        />
        <h4>Computers</h4>
      </Link>
      <Link className={Styles.contentWrapper}>
        <img
          src="/assets/icons/CategoryMenu/SmartWatch.svg"
          alt="smartwatch-icon"
        />
        <h4>SmartWatch</h4>
      </Link>
      <Link className={Styles.contentWrapper}>
        <img src="/assets/icons/CategoryMenu/Camera.svg" alt="camera-icon" />
        <h4>Camera</h4>
      </Link>
      <Link className={Styles.contentWrapper}>
        <img
          src="/assets/icons/CategoryMenu/Headphone.svg"
          alt="headphone-icon"
        />
        <h4>HeadPhones</h4>
      </Link>
      <Link className={Styles.contentWrapper}>
        <img src="/assets/icons/CategoryMenu/Gamepad.svg" alt="gamepad-icon" />
        <h4>Gaming</h4>
      </Link>
    </div>
  );
};

export default CategoryMenu;
