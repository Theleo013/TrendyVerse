import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Styles from "@/pages/Register/register.module.scss";
import CustomContainer from "@/styles/base/customContainer.module.scss";
import { urls } from "@/shared/urls";
import { useRegisterUserMutation } from "@/redux/api/auth";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const onFinish = (values) => {
    registerUser(values)
      .unwrap()
      .then((res) => {
        console.log("Registration successful:", res);
        navigate(urls.LOGIN);
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <div className={`${Styles.registerContainer} ${CustomContainer.container}`}>
      <div className={Styles.registerImage}>
        <img src="/assets/images/products/loginImage.png" alt="login-image" />
      </div>
      <div className={Styles.registerContentContainer}>
        <div className={Styles.registerContent}>
          <h3>Create an account</h3>
          <p>Register to get started!</p>
        </div>
        <div className={Styles.registerFormContainer}>
          <Form
            className={Styles.form}
            form={form}
            name="register"
            layout="vertical"
            style={{ maxWidth: 300 }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              label={<span className={Styles.registerlabel}>Username</span>}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>

            <Form.Item
              name="email"
              label={<span className={Styles.registerlabel}>Email</span>}
              rules={[{ required: true, message: "Please input your E-mail!" }]}
            >
              <Input autoComplete="off" />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className={Styles.registerlabel}>Password</span>}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password autoComplete="off" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label={
                <span className={Styles.registerlabel}>Confirm Password</span>
              }
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password autoComplete="off" />
            </Form.Item>

            <Form.Item>
              <Button
                className={Styles.registerButton}
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          {error && (
            <p style={{ color: "red" }}>
              Registration failed. Please try again.
            </p>
          )}
        </div>
        <div className={Styles.sectionLogin}>
          <p>Already have an account?</p>
          <Link to={urls.LOGIN}>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
