import React, { useState, useEffect, useRef } from "react";
import Styles from "@/shared/components/SearchBar/searchBar.module.scss";
import { AutoComplete, Input, Button } from "antd";
import { useLazySearchProductsQuery } from "@/redux/api/products";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [triggerSearch, { data: products }] = useLazySearchProductsQuery();
  const navigate = useNavigate();
  const searchBarRef = useRef(null);

  const handleSearch = (value) => {
    setSearchText(value);
    if (isProductSelected) return;
    if (!value.trim()) {
      setOptions([]);
      setIsDropdownOpen(false);
      return;
    }
    triggerSearch(value);
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    if (!searchText.trim()) {
      setOptions([]);
      setIsDropdownOpen(false);
      return;
    }
    if (products && products.length > 0) {
      const uniqueProducts = Array.from(
        new Map(
          products.map((item) => [item.title.toLowerCase(), item])
        ).values()
      );
      const filteredOptions = uniqueProducts.filter((product) =>
        product.title.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setOptions(
        filteredOptions.map((product) => ({
          value: product.title.toString(),
          label: <div style={{ cursor: "pointer" }}>{product.title}</div>,
        }))
      );
      setIsDropdownOpen(filteredOptions.length > 0);
    } else {
      setOptions([]);
      setIsDropdownOpen(false);
    }
  }, [products, searchText]);

<<<<<<< HEAD
  const onSelect = (value) => {
    setSearchText(value);
=======
  // Ürün seçildiğinde, ürün detayına gitmek yerine input alanına ürün başlığını aktarıyoruz.
  const onSelect = (productId) => {
    const selectedProduct = products.find((p) => p.id === productId);
    if (selectedProduct) {
      setSearchText(selectedProduct.title);
    }
>>>>>>> bc750bacd90237111e86caa7fa0bcd6d743a1b73
    setIsDropdownOpen(false);
    setIsProductSelected(true);
  };

 
  const handleSearchButtonClick = () => {
<<<<<<< HEAD
    if (!searchText.trim()) return;

    const matchedProduct = products?.find(
      (product) => product.title.toLowerCase() === searchText.toLowerCase()
    );

    if (matchedProduct) {
      const formattedTitle = encodeURIComponent(
        matchedProduct.title.toLowerCase()
      );
      navigate(`/product/${formattedTitle}`);
      setSearchText("");
      setIsDropdownOpen(false);
      setIsProductSelected(false);
    } else {
=======
    const matchedProduct = products?.find(
      (p) => p.title.toLowerCase() === searchText.toLowerCase()
    );
    if (matchedProduct) {
      navigate(`/product/${matchedProduct.id}`);
    } else if (searchText.trim()) {
>>>>>>> bc750bacd90237111e86caa7fa0bcd6d743a1b73
      triggerSearch(searchText);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={searchBarRef} className={Styles.searchBar}>
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{ flex: 1 }}
        options={options}
        onSearch={handleSearch}
        onSelect={onSelect}
        value={searchText}
        onChange={(value) => {
          setSearchText(value);
          setIsProductSelected(false);
        }}
        open={isDropdownOpen}
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
