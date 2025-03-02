import React, { useState, useEffect } from "react";
import Styles from "@/shared/components/SearchBar/searchBar.module.scss";
import { AutoComplete, Input, Button } from "antd";
import { useLazySearchProductsQuery } from "@/redux/api/products";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [triggerSearch, { data: products }] = useLazySearchProductsQuery();
  const navigate = useNavigate();

  const handleSearch = async (value) => {
    setSearchText(value);
    if (!value) return;
    triggerSearch(value);
  };

  useEffect(() => {
    if (products) {
      setOptions(
        products.map((product) => ({
          value: product.id,
          label: <span>{product.title}</span>,
        }))
      );
    }
  }, [products]);

  const onSelect = (productId) => {
    navigate(`/product/${productId}`);
    setSearchText("");
  };

  const handleSearchButtonClick = () => {
    if (searchText.trim()) {
      triggerSearch(searchText);
    }
  };

  return (
    <div
      className={Styles.searchBar}
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{ flex: 1 }}
        options={options}
        onSearch={handleSearch}
        onSelect={onSelect}
        value={searchText}
        onChange={setSearchText}
        defaultActiveFirstOption={false}
        filterOption={false}
      >
        <Input
          className={Styles.searchInput}
          size="large"
          placeholder="Search products..."
          onPressEnter={handleSearchButtonClick}
          autoComplete="off"
        />
      </AutoComplete>
      <Button
        className={Styles.searchButton}
        type="primary"
        size="large"
        icon={<SearchOutlined />}
        onClick={handleSearchButtonClick}
        style={{
          backgroundColor: "rgba(219, 68, 68, 1)",
          borderColor: "rgba(219, 68, 68, 1)",
        }}
      />
    </div>
  );
};

export default SearchBar;
