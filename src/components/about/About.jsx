import React from "react";
import pizzabanner from "../../assets/banner.jpg";

// scss import
import "./about.scss";

const About = ({}) => {
  return (
    <section className="about">
      
      <div className="first">
        <h2>About Us</h2>
        <h3>Pizzawala</h3>
        <h4>Supreme pizza on your way</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut soluta nam impedit ab recusandae, molestiae accusantium quas, quasi architecto molestias corporis nemo autem, fugit iure cum qui voluptas laboriosam? Rem, cupiditate?</p>
      </div>
     <div className="second">
      <img src={pizzabanner} alt="banner" />
     </div>
         
    </section>
  );
};

export default About;
