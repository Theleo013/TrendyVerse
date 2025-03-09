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
  const [triggerSearch, { data: products }] = useLazySearchProductsQuery();
  const navigate = useNavigate();
  const searchBarRef = useRef(null);

  const handleSearch = async (value) => {
    setSearchText(value);
    if (!value.trim()) {
      setOptions([]);
      setIsDropdownOpen(false);
      return;
    }

    triggerSearch(value);
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    if (products?.length) {
      const filteredOptions = products.filter((product) =>
        product.title.toLowerCase().startsWith(searchText.toLowerCase())
      );

      setOptions(
        filteredOptions.map((product) => ({
          value: product.id,
          label: <span>{product.title}</span>,
        }))
      );
      setIsDropdownOpen(true);
    } else {
      setOptions([]);
      setIsDropdownOpen(false);
    }
  }, [products, searchText]);

  // Ürün seçildiğinde, ürün detayına gitmek yerine input alanına ürün başlığını aktarıyoruz.
  const onSelect = (productId) => {
    const selectedProduct = products.find((p) => p.id === productId);
    if (selectedProduct) {
      setSearchText(selectedProduct.title);
    }
    setIsDropdownOpen(false);
  };

 
  const handleSearchButtonClick = () => {
    const matchedProduct = products?.find(
      (p) => p.title.toLowerCase() === searchText.toLowerCase()
    );
    if (matchedProduct) {
      navigate(`/product/${matchedProduct.id}`);
    } else if (searchText.trim()) {
      triggerSearch(searchText);
      setIsDropdownOpen(true);
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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        onChange={setSearchText}
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
