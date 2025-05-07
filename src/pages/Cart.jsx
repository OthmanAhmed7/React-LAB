import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../store/slices/cartItems";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItemsVal);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  // Calculate total price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container">
      <h1>Cart</h1>
      <hr />
      <div className="grid-list">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
      </div>
      <hr />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <div className="grid-list cart-items">
              <div className="item-img">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
              <p>{item.price} $</p>
              <div className="item-quantity">
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleDecrement(item.id)}>-</button>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="total-price">
          <h3>Total: {totalPrice} $</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
