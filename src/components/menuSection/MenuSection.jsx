import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsAction } from "../../redux/actions/itemAction";
import { addToCart} from "../../redux/actions/cartActions";
import MenuItemCard from "./MenuItemCard";
import toast from "react-hot-toast";
// import newpizza4 from "../../assets/newpizza4";
import newpizza4 from "../../assets/newpizza4.png";

import "./menuSection.scss";

const MenuSection = () => {

  const dispatch = useDispatch();
  const{ items } = useSelector((state )=> state.items)

  const addToCartHandler = async(id,quantity) => {
    await dispatch(addToCart(id,quantity));
   toast.success("Pizza added to cart")
 }

  useEffect(() => {
    dispatch(getAllItemsAction())
  }, [dispatch])
  

  return (
    <section className="menuSection">
      {
        items && items.map((item) => {
         return <MenuItemCard key ={item._id} item ={item} image ={item.itemImage.url} handler = {addToCartHandler} />
        })
      }
    </section>
  );
};

export default MenuSection;
