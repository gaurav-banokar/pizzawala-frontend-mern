import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ isAuthenticated }) => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/" className="headerElement">
          Home
        </Link>
        <Link to="/menu" className="headerElement">
          Menu
        </Link>
        <Link to="/about" className="headerElement">
          About
        </Link>
        <Link to="/contact" className="headerElement">
          Contact
        </Link>
      </div>

      <div className="right">
        <AiOutlineSearch />
        <input type="text" />
      </div>

      <div className="cartArea">
        <div>
          <Link to="/cart" className="svg-cartarea">
            <FiShoppingCart />
          </Link>
        </div>
        <div>
          <Link to={isAuthenticated ? "/me" : "/login"} className="svg-cartarea">
            {isAuthenticated ? <FaUser /> : <FiLogIn />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
