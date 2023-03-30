import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
        <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
        <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Messages</NavLink>
        <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
        <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
        <NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
        <NavLink to="/settings" className={s.item} activeClassName={s.active}>Settings</NavLink>
    </nav>
  );
};

export default Nav;
