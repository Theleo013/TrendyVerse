import React from "react";
import { Dropdown, Space } from "antd";
import { UserOutlined, RightSquareOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { urls } from "@/shared/urls";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/authSlice";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(urls.HOME); // Çıkış yaptıktan sonra anasayfaya yönlendirme
  };

  const items = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <Link to={urls.PROFILE}>Profile</Link>,
      extra: <RightSquareOutlined />,
    },
    {
      key: "3",
      label: "Logout",
      onClick: handleLogout, // Logout işlemi burada çağrılıyor
      extra: <RightSquareOutlined />,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <UserOutlined style={{ fontSize: "30px" }} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ProfileMenu;
