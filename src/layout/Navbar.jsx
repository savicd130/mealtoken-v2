import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { Badge } from "@material-ui/core";
import { ShoppingCartIcon, AccountCircleIcon } from "@material-ui/icons";

export default function Navbar() {
  const login = true;

  return (
    <>
      <nav className="navigation">
        <div className="nav">
          {login ? (
            <div className="nav__user">{/* <AccountCircleIcon /> */}</div>
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
            <div>
              <p>$0.00</p>
              <p>0 items</p>
            </div>
            <Badge badgeContent={4}>
              <ShoppingCartIcon className="cart-icon" />
            </Badge>
          </div>
        </div>
        <div className="tabs">
          <ul>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="btn" href="#">
                Menu
              </a>
            </li>
            <li>
              <a className="btn" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="btn" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
