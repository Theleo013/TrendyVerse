import React, { useState } from "react";
import Styled from "@/shared/components/SearchMenu/searchMenu.module.scss";
import SearchBar from "@/shared/components/SearchBar";

const SearchMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${Styled.searchMenu} ${open ? Styled.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className={Styled.searchMenuIcon}>
          <img src="/assets/icons/search-icon.svg" alt="search-icon" />
        </div>
      </button>

      <nav className={`${Styled.menu} ${open ? Styled.open : ""}`}>
        <div className={Styled.searchBarContainer}>
          <SearchBar />
        </div>
      </nav>
    </>
  );
};

export default SearchMenu;
