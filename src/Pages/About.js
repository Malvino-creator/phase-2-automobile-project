import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Upcars Garage we understand how frustrating
         it can be when you breakdown by the side of the road: 
         it always seems to come when you’re least expecting it. 
         If you’re looking for a car mechanic service in Harlow 
         we offer mechanics capable of completing 
         wheel replacement, and engine diagnostics, exhaust repair, 
         clutch replacement, carbon cleaning, health check, ozone car interior cleaning, 
         timing belt replacement as well as brake tuning and much more.
        </p>
      </div>
    </div>
  );
}

export default About;