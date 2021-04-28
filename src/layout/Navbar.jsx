import React, { useState } from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Login from "../components/Login";

export default function Navbar(props) {
  const [activeNavClass, setActiveNavClass] = useState("/");
  const [login, setLogin] = useState(true);

  return (
    <>
      <nav className="navigation">
        <div className="nav">
          {login ? (
            <div className="nav__user">
              <div className="nav__user--menu">
                <div className="account-menu">
                  <AccountCircleIcon className="account-icon" />
                </div>
                <p>Dusan Savic</p>
                <ExpandMoreIcon fontSize="large" />
                <ul className="user__dropdown">
                  <li>
                    <Link to="/profile">
                      <PersonIcon fontSize="large" /> <p>Profile</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders">
                      <LocalShippingIcon fontSize="large" /> <p>Orders</p>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setLogin(false)} to="#">
                      <ExitToAppIcon fontSize="large" /> <p>Sign Out</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="nav__phone">
              <PhoneAndroidIcon className="phone-icon" />
              <div>
                <p>+0 123 45 67</p>
                <p>8:00 am – 11:30 pm</p>
              </div>
            </div>
          )}

          <div className="nav__logo col-2">
            <img src="./images/logoMeal.png" alt="logo" />
          </div>
          <div className="nav__cart">
            <Link to="/shop" className="nav__cart--box">
              <div>
                <p>$0.00</p>
                <p>0 items</p>
              </div>
              <Badge badgeContent={4}>
                {false ? (
                  <ShoppingCartOutlinedIcon className="cart-icon" />
                ) : (
                  <ShoppingCartIcon className="cart-icon" />
                )}
              </Badge>
            </Link>
          </div>
        </div>
        <div className="tabs">
          <ul>
            <li>
              <Link
                onClick={() => setActiveNavClass("/")}
                to="/"
                className={activeNavClass === "/" ? "active" : "btn"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveNavClass("/menu")}
                to="/menu"
                className={activeNavClass === "/menu" ? "active" : "btn"}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveNavClass("/about")}
                to="about"
                className={activeNavClass === "/about" ? "active" : "btn"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveNavClass("/shop")}
                to="shop"
                className={activeNavClass === "/shop" ? "active" : "btn"}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveNavClass("/contact")}
                to="contact"
                className={activeNavClass === "/contact" ? "active" : "btn"}
              >
                Contact
              </Link>
            </li>
          </ul>
          {!login && (
            <div className="tabs__signin">
              <Login />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
