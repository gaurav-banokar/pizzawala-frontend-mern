import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {ImImage} from "react-icons/im"
import photo from "../../assets/profileImage.png";
import Heading from "../layout/heading/Heading";

import "./myProfile.scss";


const MyProfile = ({ admin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    delay: 0.3,
  };

  const selectPic = (e) => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click()
  }
  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <section className="myProfile ">
      <div>
      <Heading heading={"Profile"} />
        
      </div>
      <main className="myProfileMain">
        <div>
        <motion.img {...options} src={photo} alt="user profile"></motion.img>
        <button onClick={selectPic}><ImImage size={"20px"}/><input type="file" id="fileInput"/></button>
        </div>

        <Link to={"/myorders"}>Orders</Link>
        {admin && <Link to={"/admin/item/new"}>Create Item</Link>}
        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          onClick={logoutHandler}
          id="logoutBtn"
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default MyProfile;
