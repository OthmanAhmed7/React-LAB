import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItemsVal);
  return (
    <section className="container navbar">
      <h1>
        <Link to={"/"}>Products</Link>
      </h1>

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/product-details"}>Details</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart: {cartItems.length}</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
