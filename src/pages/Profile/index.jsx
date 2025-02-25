import React from "react";
import { Form, Input, Button, Card } from "antd";

import Styles from "@/pages/Profile/profile.module.scss";

const Profile = () => {
  const onFinish = (values) => {
    console.log("Updated Profile:", values);
    // Burada güncelleme işlemi yapılabilir
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
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Profile;
