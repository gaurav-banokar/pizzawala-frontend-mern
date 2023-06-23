import React from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";
import newpizza2 from "../../../assets/newpizza2.png";
// import newpizza3 from "../../../assets/newpizza3.png";
// import newpizza4 from "../../../assets/newpizza4.png";
import { BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import "./menu.scss";
import { getAllItemsAction } from "../../../redux/actions/itemAction";
import { addToCart } from "../../../redux/actions/cartActions";
import store from "../../../redux/store"; 

const Menu = () => {
  const dispatch = useDispatch();

  
  const { items } = useSelector((state) => state.items);
  
  
 
  const addToCartHandler = async(id,quantity) => {
     await dispatch(addToCart(id,quantity));
    toast.success("Pizza added to cart")
  }
  const itemPerPage = 5;


  return (
    <section id="menu">
      <div>
        {items &&
          items.map((item,index) => {
            return (
              index <= itemPerPage ?
              <MenuCard
                itemNum={item.itemNumber}
                key={item._id}
                pizzaSrc={item.itemImage.url}
                price={item.itemPrice}
                title={item.itemName}
                id={item._id}
                handler={addToCartHandler}
                quantity={1}
                delay={0.1}
              />:""
            );
          })}

        <Link to={"/menu"}>
          <BiChevronRight />
        </Link>
      </div>
    </section>
  );
};

export default Menu;
