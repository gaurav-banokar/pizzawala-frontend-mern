import React from 'react';
import { motion } from "framer-motion";
import {MdAddShoppingCart} from "react-icons/md"
import "./emptyCart.scss";

const EmptyCart = () => {
const options = {
  initial:{
    x:"-100%",
    opacity:0,
  },
  whileInView:{
    x:0,
    opacity:1,
  },
  transition:{
    delay:0.3
  }
}
const optionsTwo = {
  initial:{
    x:"100%",
    opacity:0,
  },
  whileInView:{
    x:0,
    opacity:1,
  },
  transition:{
    delay:0.6
  }
}

  return (
    <section className="emptyCart">
       <motion.span  {...options}><MdAddShoppingCart color='red' size={"40px"}/></motion.span>
        <motion.h3 {...optionsTwo}>Cart is empty</motion.h3>
    </section>
  )
}

export default EmptyCart