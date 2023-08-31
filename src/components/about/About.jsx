import React from "react";
import pizzabanner from "../../assets/banner.jpg";

// scss import
import "./about.scss";
import Heading from "../layout/heading/Heading";

const About = ({}) => {
  return (
    <section className="about">
      
       <Heading heading={"About Us"}/>
      <div className="first">
        <h3>Let's, taste <span>Supreme Pizza</span></h3>
        {/* <h4>Supreme pizza on your way</h4> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut soluta nam impedit ab recusandae, molestiae accusantium quas, quasi architecto molestias corporis nemo autem, fugit iure cum qui voluptas laboriosam? Rem, cupiditate? <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur hic, omnis aliquam corporis esse soluta labore! Molestias minus eum tenetur doloribus reprehenderit corrupti, placeat numquam labore voluptate quod, libero voluptates neque incidunt tempore ut ipsum.</p>
        
      </div>
     <div className="second">
      <img src={pizzabanner} alt="banner" />
     </div>
         
    </section>
  );
};

export default About;
