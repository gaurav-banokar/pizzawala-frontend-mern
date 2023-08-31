import React from 'react'
import { Link } from 'react-router-dom';
import "./menuCard.scss";
// import newPizza from "../../assets/newpizza2.png";

const MenuItemCard = ({item, handler,image,category}) => {
  console.log("itcat",item.itemCategory)
  return (
    <div className="menuItemCard">
         
        <Link to={"/menu/_id"} ><img src={image}alt="spicy pizza" /></Link>
        <p>{item.itemName }</p>
        <h6>₹ {item.itemPrice}</h6>
        <p>★★★★</p>
        <button onClick={() => handler(item._id,1)}>Add To Cart</button>
    </div>
  )
}

export default MenuItemCard