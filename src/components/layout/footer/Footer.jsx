import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
   <footer>
      <div>
        <h2>Pizzawala</h2>

        <strong>All right reserved &copy; <span>Pizzawala</span></strong>
      </div>

      <aside>

        <a href="*">
          <AiFillYoutube />
        </a>
        <a href="*">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/gaurav-banokar/pizzawala" target=''>
          <AiFillGithub />
        </a>
      </aside>
   </footer>
  )
}

export default Footer