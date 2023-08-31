import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getAllItemsAction } from "../../../redux/actions/itemAction";
import MenuBox from "./MenuBox";
import { useSelector } from "react-redux";
import "./menu.scss";

const Menu = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.items);
  const itemsArray = Object.entries(items);

  useEffect(() => {
    dispatch(getAllItemsAction("vegPizza"));
    dispatch(getAllItemsAction("nonVegPizza"));
    
  }, [dispatch]);

  return (
    <section id="menu">
      <div>
        {itemsArray &&
          itemsArray.map((item, index) => {
            return (
              item[1].length !== 0 && (
                <MenuBox
                  key={index}
                  categoryName={item[0]}
                  arr={item[1] ? item[1] : []}
                />
              )
            );
          })}
      </div>
    </section>
  );
};

export default Menu;
