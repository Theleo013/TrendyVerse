import React from "react";
import Styles from "@/pages/Checkout/checkout.module.scss";
import CustomContainer from "@/styles/base/customContainer.module.scss";
import { Form, Input, Button, Spin, Alert } from "antd";
import { useSelector } from "react-redux";
import { usePerformCheckoutMutation } from "@/redux/api/checkoutApi";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";

const Checkout = () => {
  const { basket, basketTotalPrice } = useSelector((state) => state.basket);
  const [performCheckout, { data, error, isLoading, isSuccess }] =
    usePerformCheckoutMutation();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const orderData = {
      customer: {
        firstName: values.firstName,
        lastName: values.lastName,
        country: values.country,
        city: values.city,
        address: values.address,
        apartment: values.apartment,
        phone: values.phone,
        email: values.email,
        postCode: values.postCode,
        creditCard: values.creditCard,
      },
      items: basket,
      total: basketTotalPrice,
    };

    try {
      const response = await performCheckout(orderData).unwrap();
      console.log("Checkout successful:", response);
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div className={Styles.checkoutConatiner}>
      <div className={Styles.navigateLinks}>
        <Link className={Styles.toBasket} to={urls.BASKET}>
          Basket
        </Link>
        /
        <Link className={Styles.toCheckout} to={urls.CHECKOUT}>
          Checkout
        </Link>
      </div>

      {isLoading && <Spin tip="Processing Checkout..." />}
      {error && <Alert message="Checkout failed" type="error" showIcon />}
      {isSuccess && (
        <Alert message="Checkout successful!" type="success" showIcon />
      )}
      <div
        className={`${Styles.checkoutContentContainer} ${CustomContainer.container}`}
      >
        <div className={Styles.checkoutFormWrapper}>
          <h1>Checkout</h1>

          <Form
            className={Styles.form}
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Full Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input placeholder="Mirza Mirzayev" />
            </Form.Item>

            <Form.Item
              label="Country"
              name="country"
              rules={[
                { required: true, message: "Please input your country!" },
              ]}
            >
              <Input placeholder="Azarbaijan" />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please input your city!" }]}
            >
              <Input placeholder="Baku" />
            </Form.Item>

            <Form.Item
              label="Street Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your street address!",
                },
              ]}
            >
              <Input placeholder="123 Main St" />
            </Form.Item>

            <Form.Item
              label="Apartment, Floor, etc (Optional)"
              name="apartment"
            >
              <Input placeholder="Apt 5B" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input placeholder="+994-000-00-00" />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="example@email.com" />
            </Form.Item>

            <Form.Item
              label="Post Code"
              name="postCode"
              rules={[
                { required: true, message: "Please input your post code!" },
              ]}
            >
              <Input placeholder="AZ0000" />
            </Form.Item>

            <Form.Item
              label="Credit Card Number"
              name="creditCard"
              rules={[
                {
                  required: true,
                  message: "Please input your credit card number!",
                },
              ]}
            >
              <Input placeholder="XXXX-XXXX-XXXX-XXXX" />
            </Form.Item>
          </Form>
        </div>

        <div className={Styles.checkoutDataWrapper}>
          <div className={Styles.checkoutData}>
            {basket.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.image} />
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
          <div className={Styles.checkoutTotalWrapper}>
            <div className={Styles.checkoutshipping}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={Styles.checkoutTotal}>
              <span>Total:</span>
              <span>${basketTotalPrice}</span>
            </div>
          </div>
          <div className={Styles.chooseBank}>
            <span>Bank:</span>
            <div className={Styles.bankImageWrapper}>
              <img src="/assets/images/Visa.png" alt="visa-image" />
              <img src="/assets/images/MasterCard.png" alt="mastercard-image" />
            </div>
          </div>
          <div className={Styles.payOrder}>
            <button>Pay Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
