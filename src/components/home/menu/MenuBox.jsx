import React from "react";
import { addToCart } from "../../../redux/actions/cartActions";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import MenuCard from "./MenuCard";

import "./menuBox.scss";

const MenuBox = ({ categoryName, arr }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemPerPage = 3;
  const addToCartHandler = (id, quantity) => {
    dispatch(addToCart(id, quantity));
    toast.success("Pizza added to cart");
  };

  const buttonHandler = (e) => {
    navigate("/menu");
    window.scroll({top:"top",behavior:"smooth"})
  };

  return (
    <div className="menuBox">
      <h2>{arr.length !== 0 && categoryName}</h2>
      <div className="menuBoxSecondDiv">
        {arr.length !== 0 &&
          arr.map((item, index) => {
            return index <= itemPerPage ? (
              <MenuCard
                itemNum={item.itemNumber}
                key={item._id}
                pizzaSrc={item.itemImage.url}
                price={item.itemPrice}
                title={item.itemName}
                category={item.itemCategory}
                id={item._id}
                handler={addToCartHandler}
                quantity={1}
                delay={0.1}
              />
            ) : (
              ""
            );
          })}
        {arr.length !== 0 && (
          <button onClick={buttonHandler}>
            <BiChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuBox;
