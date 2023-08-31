import React from "react";
import "./categoriesNav.scss";
import { useDispatch } from "react-redux";
import { getAllItemsByCategoryAction } from "../../redux/actions/itemAction";
import { motion } from "framer-motion";


const CategoriesNav = () => {
  const dispatch = useDispatch();

  const categoryClickHandler = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "vegPizza":
        dispatch(getAllItemsByCategoryAction("vegPizza"));
        break;
      case "nonVegPizza":
        dispatch(getAllItemsByCategoryAction("nonVegPizza"));
        break;
      case "pizzaMania":
        dispatch(getAllItemsByCategoryAction("pizzaMania"));
        break;
      case "sideAndBeverages":
        dispatch(getAllItemsByCategoryAction("sideAndBeverages"));
        break;
      case "pasta":
        dispatch(getAllItemsByCategoryAction("pasta"));
        break;

      default:
      case "vegPizza":
        dispatch(getAllItemsByCategoryAction("vegPizza"));
        break;
    }
  };

  return (
    <motion.div className="categoriesNav"
    initial={{ y: "-100%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6 }}
    >
      <ul>
        <li>
          <button value="vegPizza" onClick={categoryClickHandler}>
            Veg Pizza
          </button>
        </li>
        <li>
          <button
            value="nonVegPizza"
            id="nonVegId"
            onClick={categoryClickHandler}
          >
            Non Veg Pizza
          </button>
        </li>
        <li>
          <button value="pizzaMania" onClick={categoryClickHandler}>
            Pizza Mania
          </button>
        </li>
        <li>
          <button value="sideAndBeverages" onClick={categoryClickHandler}>
            Side & Beverages
          </button>
        </li>
        <li>
          <button value="pasta" onClick={categoryClickHandler}>
            Pasta
          </button>
        </li>
      </ul>

      <div>
        <select  onClick={categoryClickHandler}>
          <option value="vegPizza" >
            Veg Pizza
          </option>
          <option value="nonVegPizza" >
            Non Veg Pizza
          </option>
          <option value="pizzaMania" >
            Pizza Mania
          </option>
          <option value="sideAndBeverages" >
            Side & Beverages{" "}
          </option>
          <option value="pasta" >
            Pasta
          </option>
        </select>
      </div>
    </motion.div>
  );
};

export default CategoriesNav;
