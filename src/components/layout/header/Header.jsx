import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

import logo from "../../../assets/pizzawala-logo.png";
import "../../../styles/colors.scss";

const Header = ({ isAuthenticated }) => {


  const mobNav = useRef(null);
  const closeIcon = useRef(null);
  const menuHandler = (e) => {
    console.log("menu clicked");
    console.log(mobNav);
    console.log(closeIcon);

    if (mobNav !== null && closeIcon !== null) {
      mobNav.current.style.display = "flex";
      closeIcon.current.firstElementChild.style.display = "block"
    }
  };
  const closeMenuHandler = (e) => {
    if (mobNav !== null && closeIcon !== null) {
      mobNav.current.style.display = "none";
      closeIcon.current.firstElementChild.style.display = "none";
    }
  };

  return (
    <div className="header">
      <div className="left">
        <div>
          <HiMenuAlt1 size={"30px"} color="red" onClick={menuHandler} />
          <span ref={closeIcon} className="closeSpan">
            
            <GrClose size={"25px"} className="closeMenuIcon"  onClick={closeMenuHandler} />
          </span>
        </div>
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

      <div className="cartArea">
        <div>
          <Link to="/cart" className="svg-cartarea">
            <FiShoppingCart style={{ color: "#fff" }} />
          </Link>
        </div>
        <div>
          <Link
            to={isAuthenticated ? "/me" : "/login"}
            className="svg-cartarea"
          >
            {isAuthenticated ? (
              <FaUser style={{ color: "#fff" }} />
            ) : (
              <FiLogIn style={{ color: "#fff" }} />
            )}
          </Link>
        </div>
      </div>
      <div className="mobileNavbar" ref={mobNav}>
        <div>
          <Link to="/" onClick={closeMenuHandler}>
            Home
          </Link>
          <Link to="/menu" onClick={closeMenuHandler}>
            Menu
          </Link>
          <Link to="/about" onClick={closeMenuHandler}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenuHandler}>
            Contact
          </Link>
        </div>

        <div>
          <div>
            <Link to="/cart" className="svg-cartarea">
              <FiShoppingCart
                color="red"
                size={"27px"}
                onClick={closeMenuHandler}
              />
            </Link>
          </div>
          <div>
            <Link
              to={isAuthenticated ? "/me" : "/login"}
              className="svg-cartarea"
              onClick={closeMenuHandler}
            >
              {isAuthenticated ? (
                <FaUser color="red" size={"25px"} onClick={closeMenuHandler} />
              ) : (
                <FiLogIn color="red" size={"25px"} onClick={closeMenuHandler} />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
