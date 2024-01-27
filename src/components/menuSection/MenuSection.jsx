import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesNav from "./CategoriesNav";
import MenuItemsGroup from "./MenuItemsGroup";
import { motion } from "framer-motion";
import { getAllItemsBySearchAction } from "../../redux/actions/itemAction";

import { BiSearchAlt } from "react-icons/bi";

import "./menuSection.scss";

const MenuSection = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [finalValue, setFinalValue] = useState("");

  const { itemsByCategory } = useSelector((state) => state.itemsByCategory);
  const { itemsBySearch } = useSelector((state) => state.itemsBySearch);

  const inputForSearch = document.querySelector("input");
  const searchButton = document.getElementById("searchBtn");

  if (inputForSearch) {
    inputForSearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
      }
    });
  }

  const searchHandler = () => {
    setFinalValue(value);
    dispatch(getAllItemsBySearchAction(value));
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setFinalValue("");
    }
  };

  const displayedItems =
    finalValue && finalValue ? itemsBySearch :  itemsByCategory;

  return (
    <>
      <section className="menuSection">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input type="text" value={value} onChange={handleInputChange} />
          <motion.button
            type="submit"
            onClick={searchHandler}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            id="searchBtn"
          >
            <BiSearchAlt color="red" className="searchIcon" />
          </motion.button>
        </motion.div>
        <CategoriesNav />
        <MenuItemsGroup items={displayedItems} />
      </section>
    </>
  );
};

export default MenuSection;
