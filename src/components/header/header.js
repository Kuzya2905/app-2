import { Link } from "react-router-dom";
import React from "react";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-left">
          <img src="./images/header_logo.svg" alt="logo" />
          <div className="info">
            <div className="title">REACT SNEAKERS</div>
            <div className="text">Магазин лучших кроссовок</div>
          </div>
        </div>
      </Link>
      <ul className="header-right">
        <li className="cart" onClick={props.openCart}>
          <img src="./images/header_cart.svg" alt="cart" />
          <span className="text">{props.totalSumCart} руб.</span>
        </li>
        <Link to="/favorites">
          <li className="bookmarks" color="color_red">
            <img src="./images/header_bookmarks.svg" alt="bookmarks" />
            <span className="text">Закладки</span>
          </li>
        </Link>
        <li className="profile">
          <img src="./images/header_profile.svg" alt="profile" />
          <span className="text">Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
