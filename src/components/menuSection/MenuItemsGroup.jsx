import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import MenuItemCard from "./MenuItemCard";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";

import { motion } from "framer-motion";
import "./menuItemsGroup.scss";

const MenuItemsGroup = ({ items }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (id, quantity) => {
    dispatch(addToCart(id, quantity));
    toast.success("Pizza added to cart");
  };

  return (
    <motion.div
      className="menuItemsGroup"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {items ? (
        items.map((item) => {
          return (
            <MenuItemCard
              key={item._id}
              item={item}
              image={item.itemImage.url}
              handler={addToCartHandler}
            />
          );
        })
      ) : (
        <Loader />
      )}
    </motion.div>
  );
};

export default MenuItemsGroup;
