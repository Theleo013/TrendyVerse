import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  PhoneOutlined,
  InfoCircleOutlined,
  UserAddOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Menu, Input } from "antd";
import SearchBar from "../SearchBar";

const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
    }
  };

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      icon: <PhoneOutlined />,
      label: "Contact",
      onClick: () => navigate("/contact"),
    },
    {
      key: "3",
      icon: <InfoCircleOutlined />,
      label: "About",
      onClick: () => navigate("/about"),
    },
    {
      key: "4",
      icon: <UserAddOutlined />,
      label: "Sign Up",
      onClick: () => navigate("/register"),
    },
    {
      key: "5",
      icon: <SearchOutlined />,
      label: collapsed ? (
        "Search"
      ) : searchVisible ? (
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={handleSearch}
          style={{
            width: 200,
            height: 32,
            borderRadius: "5px",
            marginLeft: 8,
          }}
        />
      ) : (
        "Search"
      ),
      onClick: () => {
        if (!collapsed) setSearchVisible(!searchVisible);
      },
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          background: "white",
          color: "black",
          border: "1px solid black",
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        defaultSelectedKeys={["1"]}
        mode="horizontal" // YATAY MENÜ
        theme="light"
        inlineCollapsed={collapsed}
        items={menuItems}
      />
    </div>
  );
};

export default MenuBar;
