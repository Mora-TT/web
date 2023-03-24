import React from "react";
import BannerBackground from "../Assets/home-banner-background2.png";
import BannerImage from "../Assets/tt.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          MORA SMASHES 
          </h1>
          <h1 className="primary-heading">2023</h1>
          <p className="primary-text">
            jclshflfd alihaffh afkjafs asflhasfk lknsdflkdn kdjf
          </p>
          <button className="secondary-button">
            Register Now <FiArrowRight  style={{background: "#0000"}}/>{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
