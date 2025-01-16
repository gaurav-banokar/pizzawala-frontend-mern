import React from "react";
import { motion } from "framer-motion";

import "../menu/menu.scss";

const MenuCardLoader = ({
 
}) => {
  return (
    <motion.div
      className="menuCardLoader"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay:0.3,
      }}
    >
      <div></div>
      <main>
        <img src={""} alt={""} />

        <h5></h5>

        <p> </p>

        <button> </button>
      </main>
    </motion.div>
  );
};

export default MenuCardLoader;
