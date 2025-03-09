import React, { useState } from "react";
import Styled from "./burgerMenu.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
import { useSelector } from "react-redux";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
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
        <Link to={urls.HOME}> Home</Link>
        <Link to={urls.CONTACT}> Contact</Link>
        <Link to={urls.ABOUT}> About</Link>
        {user ? null : <Link to={urls.REGISTER}> Sign Up</Link>}
      </nav>
    </>
  );
};

export default BurgerMenu;
