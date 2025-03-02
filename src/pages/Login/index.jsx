import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useLazyLoginUserQuery } from "@/redux/api/auth";
import Styles from "@/pages/Login/login.module.scss";
import CustomContainer from "@/styles/base/customContainer.module.scss";
import { urls } from "@/shared/urls";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLazyLoginUserQuery();

  const onFinish = async (values) => {
    const { username, password } = values;
    try {
      const response = await loginUser({ username, password }).unwrap();

      if (response.success) {
        navigate(`${urls.HOME}`);
      } else {
        alert(response.message || "Invalid username or password.");
      }
    } catch (err) {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className={`${Styles.loginContainer} ${CustomContainer.container}`}>
      <div className={Styles.loginImage}>
        <img src="/assets/images/products/loginImage.png" alt="login-image" />
      </div>
      <div className={Styles.loginContentContainer}>
        <div className={Styles.loginContent}>
          <h3>Welcome Back!</h3>
          <p>Please log in to your account.</p>
        </div>
        <div className={Styles.loginFormContainer}>
          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                className={Styles.loginButton}
                block
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
