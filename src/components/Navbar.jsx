import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import LanguageContext from "../context/Language";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItemsVal);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.setAttribute("dir", language ? "rtl" : "ltr");
  }, [language]);
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

        <li onClick={() => setLanguage(!language)}>
          {!language ? <button>AR</button> : <button>EN</button>}
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
