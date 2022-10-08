import React from "react";
//import MultiplePizzas from "../assets/pizzaLogo"
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundColor: "pink"}}>

      </div>
      <div className="aboutBottom">
        <h1> <strong>ABOUT US</strong></h1>
        <p>
        At Pizzaina, we believe in providing for our customers every need.<br></br>
        This is a place where you can find the peace of mind you deserve while filling up. 
        Feel like trying out our new resturant cuisines,<br></br>you are in the right place, 
        our services and offers are unmatched to any other. 
        Dont hesitate to pick up that phone and dial to make your order today!
        </p>
      </div>
    </div>
  );
}

export default About;