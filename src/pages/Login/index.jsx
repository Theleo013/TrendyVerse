import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Styles from "@/pages/Login/login.module.scss";
import { urls } from "@/shared/urls";
import { useLoginUserMutation } from "@/redux/api/auth";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const onFinish = (values) => {
    loginUser(values)
      .unwrap()
      .then((res) => {
        // Başarılı login durumunda örneğin token'ı saklayabilir, dashboard'a yönlendirebilirsiniz.
        console.log("Login successful:", res);
        navigate("/basket");
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginImage}>
        <img
          src="./src/assets/images/products/loginImage.png"
          alt="login-image"
        />
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Log in
              </Button>
              or <Link to={urls.REGISTER}>Register now!</Link>
            </Form.Item>
          </Form>
          {error && (
            <p style={{ color: "red" }}>
              {error?.data?.message || "Login failed. Please try again."}
            </p>
          )}
        </div>
        <div className={Styles.loginGoogle}>
          <button>Sign-in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
