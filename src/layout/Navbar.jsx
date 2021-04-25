import React from "react";
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

export default function Navbar() {
  const login = true;

  return (
    <>
      <nav className="navigation">
        <div className="nav">
          {login ? (
            <div className="nav__user">
              <Link className="nav__user--menu" to="/profile">
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
                    <Link to="#">
                      <ExitToAppIcon fontSize="large" /> <p>Sign Out</p>
                    </Link>
                  </li>
                </ul>
              </Link>
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
            <Link to="/cart" className="nav__cart--box">
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
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="btn">
                Menu
              </Link>
            </li>
            <li>
              <Link to="contact" className="btn">
                Contact
              </Link>
            </li>
            <li>
              <Link to="about" className="btn">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
