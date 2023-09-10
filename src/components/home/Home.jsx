import React, {useEffect} from "react";
import "./home.scss";
import { motion } from "framer-motion";
import Menu from "./menu/Menu";
import Heading from "../layout/heading/Heading";
import pizzaBanner from "../../assets/pizzawebp.webp";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";

import { useDispatch } from "react-redux";
import { getAllItemsAction } from "../../redux/actions/itemAction";

const Home = () => {
   const { items } = useSelector((state) => state.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItemsAction("vegPizza"));
    dispatch(getAllItemsAction("nonVegPizza"));
    
  }, [dispatch]);

  const isItem =  Object.values(items)[0].length ||  Object.values(items)[1].length !== 0

  return (
    <>
      {
     
     isItem ? (
        <div className="home">
          <motion.section
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="homefirstSection"
          >
            {/* 1st div  */}
            <div className="subHeading">
              <div className="subHeadingContent">
                <h2>We Serve Your choice</h2>
                <span>
                  <a href="#menu">Just Order</a>
                </span>
              </div>
              <aside>
                <img src={pizzaBanner} alt="pizza" />
              </aside>
            </div>

            {/* 2nd div  */}
            <div className="homeContent">
              <h1>Delicious Pizza On Your Way</h1>
              <h3>Book The Order Now</h3>
            </div>
          </motion.section>

          <div className="homeMenu" id="homeMenu">
            <Heading heading={"Menu"} />
            <Menu />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
