import React from 'react'
import {motion} from "framer-motion";
import pizza from "../../../assets/newpizza1.png";

import "../menu/menu.scss"

const MenuCard = ({ itemNum, pizzaSrc, price, title, category, id, handler,quantity, delay}) => {


  
  return (
    <motion.div
    className="menuCard"
    initial={{
      x: "-100%",
      opacity: 0,
    }}
    whileInView={{
      x: 0,
      opacity: 1,
    }}
    transition={{
      delay,
    }}
  >
    <div>Item {itemNum}</div>
    <main>
      <img src={pizza} alt={itemNum} />

      <h5>₹ 200</h5>

      <p>Veg Pizza </p>
     
      <button  onClick={()=> handler(id,quantity)}> Buy Now</button>
    
    </main>
  </motion.div>
  )
}

export default MenuCard