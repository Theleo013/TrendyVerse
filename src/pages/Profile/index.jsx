import React from "react";
import { Form, Input, Button, Card } from "antd";

import Styles from "@/pages/Profile/profile.module.scss";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const onFinish = (values) => {
    console.log("Updated Profile:", values);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={Styles.profileContainer}>
      <Card
        title={
          user?.username ? `Welcome dear: ${user.username}` : "Your Account"
        }
        bordered={false}
        className={Styles.profileCard}
      >
        <div className={Styles.profileForm}>
          <Form
            layout="vertical"
            initialValues={{
              username: user?.username || "",
              email: user?.email || "",
            }}
            onFinish={onFinish}
          >
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>
            <Form.Item>
              <Button
                className={Styles.profileButton}
                type="primary"
                htmlType="submit"
              >
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
