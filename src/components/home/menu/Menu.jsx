import React from "react";

import MenuBox from "./MenuBox";
import { useSelector } from "react-redux";
import "./menu.scss";

const Menu = () => {
  const { items } = useSelector((state) => state.items);
  const itemsArray = Object.entries(items);

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
