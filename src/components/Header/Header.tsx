import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/images/logo-facebook-noir.png";
import { NavLink } from "react-router-dom";

type HeaderType = {
  data: { login: string };
  isAuth: boolean;
};

const Header = (props: HeaderType) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          props.data.login
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
