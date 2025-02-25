import React from "react";
import Styles from "@/shared/components/DeliveryCard/deliveryCard.module.scss";

const DeliveryCard = () => {
  return (
    <div className={Styles.servicesContainer}>
      <div className={Styles.servicesWrapper}>
        <img src="/assets/icons/Delivery.svg" alt="delivery-icon" />
        <h4>FREE AND FAST DELIVERY</h4>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className={Styles.servicesWrapper}>
        <img src="/assets/icons/Service.svg" alt="service-icon" />
        <h4>24/7 CUSTOMER SERVICE</h4>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className={Styles.servicesWrapper}>
        <img src="/assets/icons/Quarantee.svg" alt="quarantee-icon" />
        <h4>MONEY BACK GUARANTEE</h4>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default DeliveryCard;
