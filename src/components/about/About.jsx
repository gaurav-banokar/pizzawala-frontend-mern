import React from "react";
import pizzabanner from "../../assets/banner.jpg";

// scss import
import "./about.scss";
import Heading from "../layout/heading/Heading";

const About = ({}) => {
  return (
    <section className="about">
      <Heading heading={"About Us"} />
      <div className="first">
        <h3>
          Let's, taste <span>Supreme Pizza</span>
        </h3>
        <p>
          <h2>Our Philosophy</h2>
          At Pizzawala, we believe in three core principles that guide
          everything we do:
          <br />
          <h3> 1. Quality : </h3> <br /> We source the finest ingredients, from
          handpicked vegetables to premium cheeses and meats.
          <br />
          <h3> 2. Craftsmanship: </h3> <br /> Our expert pizzaiolos (pizza
          makers) are dedicated to the craft of pizza-making. They meticulously
          hand-stretch the dough, layer on the toppings, and bake each pizza to
          perfection in our wood-fired ovens, resulting in a crispy yet tender
          crust with a perfect balance of flavors.
          <br />
          <h3> 3. Community: </h3> <br />
          We understand that pizza is more than just a meal; it's a shared
          experience that brings people together. That's why we strive to foster
          a sense of community, whether you're enjoying our pizza with friends
          and family or ordering for a solo pizza night.
          <h2>Savor the moment. Savor Pizzawala.</h2>
        </p>
      </div>
      <div className="second">
        <img src={pizzabanner} alt="banner" />
      </div>
    </section>
  );
};

export default About;
