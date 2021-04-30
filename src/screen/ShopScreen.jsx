import React from "react";
import Title from "../components/Title";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function ShopScreen() {
  return (
    <>
      <Title title="shop" />

      <div className="shop">
        <div className="shop__cart">
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart-item">
                <td className="cart-close-icon">
                  <button>
                    <CancelIcon className="cart-cancel-icon" fontSize="large" />
                  </button>
                </td>
                <td className="cart-img">
                  <img src="./images/hot-sales/1.gif" alt="1" />
                </td>
                <td className="cart-title">Saporita</td>
                <td>$2.60</td>
                <td className="cart-qty">
                  <AddIcon fontSize="large" />
                  <p>1</p>
                  <RemoveIcon fontSize="large" />
                </td>
                <td>$2.60</td>
              </tr>
              <tr className="cart-item">
                <td className="cart-close-icon">x</td>
                <td className="cart-img">
                  <img src="./images/hot-sales/1.gif" alt="1" />
                </td>
                <td className="cart-title">Saporita</td>
                <td>$2.60</td>
                <td className="cart-qty">2</td>
                <td>$2.60</td>
              </tr>
              <tr className="cart-item">
                <td className="cart-close-icon">x</td>
                <td className="cart-img">
                  <img src="./images/hot-sales/1.gif" alt="1" />
                </td>
                <td className="cart-title">Saporita</td>
                <td>$2.60</td>
                <td className="cart-qty">2</td>
                <td>$2.60</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="shop__totals">total</div>
      </div>
    </>
  );
}
