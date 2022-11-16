import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2)
  return (
    <div className="cart">
      <h4 className="order-summary">Order Summary</h4>
      <div className="cart-info">
              <p className="selected-items">Selected Items: {cart.length}</p>
              <p>Total Price: ${ total}</p>
              <p>Total Shipping Charge: ${ shipping}</p>
              <p>Tax: ${ tax}</p>
              <h6>Grand Total: ${ grandTotal}</h6>
      </div>
    </div>
  );
};

export default Cart;