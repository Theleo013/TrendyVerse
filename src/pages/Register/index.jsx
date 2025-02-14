import React from "react";
import { Form, Input, Button, Checkbox, Select, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Styles from "@/pages/Register/register.module.scss";
import { urls } from "@/shared/urls";
import { useRegisterUserMutation } from "@/redux/api/auth";

const { Option } = Select;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
};

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const onFinish = (values) => {
    registerUser(values)
      .unwrap()
      .then((res) => {
        console.log("Registration successful:", res);
        navigate(urls.LOGIN); // Kayıt sonrası login sayfasına yönlendirme
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className={Styles.registerContainer}>
      <div className={Styles.registerImage}>
        <img
          src="./src/assets/images/products/loginImage.png"
          alt="register-image"
        />
      </div>
      <div className={Styles.registerContentContainer}>
        <div className={Styles.registerContent}>
          <h3>Create an account</h3>
          <p>Register to get started!</p>
        </div>
        <div className={Styles.registerFormContainer}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                { type: "email", message: "The input is not a valid E-mail!" },
                { required: true, message: "Please input your E-mail!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="nickname"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}
            >
              <Select placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Captcha"
              extra="We must make sure that you are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input the captcha you got!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Register
              </Button>
            </Form.Item>
          </Form>
          {error && (
            <p style={{ color: "red" }}>
              {error?.data?.message || "Registration failed. Please try again."}
            </p>
          )}
        </div>
        <div className={Styles.registerGoogle}>
          <button>Sign-up with Google</button>
        </div>
        <div>
          <p>Already have an account?</p>
          <Link to={urls.LOGIN}>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
