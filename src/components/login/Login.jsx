import React from 'react';
import {FcGoogle} from "react-icons/fc";
import { motion} from "framer-motion";
// import { useDispatch } from "react-redux";
// import { login } from '../../redux/actions/userAction';
import "./login.scss"
import { server } from '../../redux/store';



const Login = () => {


const loginHandler = () => {
  window.open(`${server}/googlelogin`, "_self");
}

  return (
    <section className=' login allSection'>
       <motion.button
       
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={loginHandler}
      >
        <FcGoogle />Login With Google
      </motion.button>
    </section>
  )
}

export default Login