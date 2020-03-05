import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png"
                alt=""
            />
            <h1>Social network</h1>
        </header>
    );
};

export default Header;