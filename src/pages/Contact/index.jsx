import React from "react";
import Styles from "@/pages/Contact/contact.module.scss";
import CustomContainer from "@/styles/base/customContainer.module.scss";
import { Button, Form, Input, Select, Spin } from "antd";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
import { useContactFormMutation } from "@/redux/api/contact";

const Contact = () => {
  const [contactForm, { isLoading, error }] = useContactFormMutation();

  const { Option } = Select;

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 23 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const onFinish = (values) => {
    contactForm(values)
      .then((res) => {
        console.log("Form successfully submitted: ", res);
      })
      .catch((error) => {
        console.error("Error submitting form: ", error);
      });

    form.resetFields();

    console.log("value", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="944">+994</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className={Styles.contactContainer}>
      <div className={Styles.contactNavigateLinks}>
        <Link className={Styles.linkToHome} to={urls.HOME}>
          Home
        </Link>
        /
        <Link className={Styles.linkToAbout} to={urls.ABOUt}>
          Contact
        </Link>
      </div>
      <div
        className={`${Styles.contactContentContainer} ${CustomContainer.container}`}
      >
        <div className={Styles.contactCommunication}>
          <div className={Styles.contactUsWrapper}>
            <div className={Styles.contactIcon}>
              <img
                src="/assets/icons/ContactIcons/icon-phone.svg"
                alt="icon-phone"
              />
              <h4>Call To Us</h4>
            </div>
            <div className={Styles.contactDescription}>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +994 12 111 22 33</p>
            </div>
            <div className={Styles.contactIcon}>
              <img
                src="/assets/icons/ContactIcons/icon-mail.svg"
                alt="icon-mail"
              />
              <h4>Write To US</h4>
            </div>
            <div className={Styles.contactDescription}>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@TrendyVerse.com</p>
              <p>Emails: support@TrendyVerse.com</p>
            </div>
          </div>
        </div>
        <div className={Styles.contactFormWrapper}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            form={form}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
          >
            <div className={Styles.contactInfo}>
              <Form.Item
                name={["request", "name"]}
                rules={[{ required: true }]}
              >
                <Input className={Styles.inputName} placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                name={["request", "email"]}
                rules={[{ type: "email" }]}
              >
                <Input className={Styles.inputEmail} placeholder="Your Email" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  className={Styles.inputPhone}
                  placeholder="Phone Number"
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>
            <div className={Styles.contactIntroduction}>
              <Form.Item name={["user", "introduction"]}>
                <Input.TextArea placeholder="Your Massage" />
              </Form.Item>
            </div>
            <div className={Styles.contactSubmit}>
              <Form.Item label={null}>
                <Button
                  className={Styles.contactButton}
                  type="primary"
                  htmlType="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Spin /> : "Submit"}
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
