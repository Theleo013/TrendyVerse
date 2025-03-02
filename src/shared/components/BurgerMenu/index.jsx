import React, { useState } from "react";
import Styled from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${Styled.burgerMenu} ${open ? Styled.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className={Styled.line}></div>
        <div className={Styled.line}></div>
        <div className={Styled.line}></div>
      </button>

      <nav className={`${Styled.menu} ${open ? Styled.open : ""}`}>
        <a href="/"> Home</a>
        <a href="/contact"> Contact</a>
        <a href="/about"> About</a>
        <a href="/register"> Sign Up</a>
      </nav>
    </>
  );
};

export default BurgerMenu;
