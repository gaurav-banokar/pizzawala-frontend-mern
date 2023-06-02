import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./myProfile.scss";
import photo from "../../assets/profile-pic.webp";

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

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <section className="myProfile allSection">
      <main className="allSectionContainer">
        <motion.img {...options} src={photo} alt="user profile"></motion.img>

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
