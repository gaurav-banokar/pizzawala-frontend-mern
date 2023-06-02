import React from "react";
import "./home.scss";
import { motion } from "framer-motion";
import Menu from "./menu/Menu";
import Heading from "../layout/heading/Heading";

const Home = () => {
  return (
    <>
      <div className="home">
        <motion.section
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="homeBanner"
        >
          <motion.h1
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Delicious Pizza On Your way
          </motion.h1>
          <h4>Pizzawala Special Menu </h4>
          <a href="#menu">
            {" "}
            <motion.button
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Explore Menu
            </motion.button>
          </a>
        </motion.section>
        
        <Heading heading={"Menu"} />
        <Menu />

      </div>
    </>
  );
};

export default Home;
