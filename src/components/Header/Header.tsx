import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/images/logo-facebook-noir.png";
import { NavLink } from "react-router-dom";

type HeaderType = {
  data: { login: string | null };
  isAuth: boolean;
  logOut: () => void;
};

const Header = (props: HeaderType) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.data.login} <button onClick={props.logOut}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
