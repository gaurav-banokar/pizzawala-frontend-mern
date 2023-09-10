import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import MenuItemCard from "./MenuItemCard";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";

import { motion } from "framer-motion";
import "./menuItemsGroup.scss";
import { getAllItemsByCategoryAction } from "../../redux/actions/itemAction";

const MenuItemsGroup = ({ items }) => {
  const dispatch = useDispatch();

 
  

  useEffect(() => {
    dispatch(getAllItemsByCategoryAction("vegPizza"));
  }, [dispatch]);


 
  
 

 


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
      {items.length !== 0 ? (
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
       <h3 className="h3-extra">Out Of Stock <br />
       <span className="span-extra" style={{fontSize:"14px",color:"#000",textAlign:"center"}}>Checkout Another Category</span></h3>
      )}
    </motion.div>
  );
};

export default MenuItemsGroup;
