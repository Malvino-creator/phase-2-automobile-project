import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> PANTHERA PIZZAINA </h1>
                <p> <strong> WHOLESOMELY AMAZINGLY MADE FOR YOU!</strong></p>
                <Link to="/menu">
                    <button className="btn"> ORDER NOW </button>
                </Link>
            </div>
        </div> 
    );
}

export default Home;