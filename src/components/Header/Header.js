import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <a href="/shop">Shop</a>
          <a href="/orders">Orders</a>
          <a href="/inventory">Inventory</a>
          <a href="/about">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
