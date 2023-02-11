import React, {ReactNode} from "react";
import s from "./Header.module.css"
import logo from '../../assets/images/logo-facebook-noir.png'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img
                src={logo}
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? 'free' : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header