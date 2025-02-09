import React from "react";
const titleText = "New arrivals only";
const shortText = "New";
const heroText = "Collections";
const heroDescription = "For everyone";
import hand_icon from "../../assets/images/hand_icon.png";
import hero_image from "../../assets/images/banner (1).png";
import arrow_icon from "../../assets/images/arrow.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container-wrapper d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 hero-left-wrap">
              <div className="hero-title-wrap">
                <h2 className="hero-title text-lowercase mb-3">{titleText}</h2>
              </div>
              <div className="hero-content-wrap">
                <div className="hero-content-flex d-flex align-items-center">
                  <div className="hero-text-wrap">
                    <p className="hero-text display-4">{shortText}</p>
                  </div>
                  <div className="hero-hand-icon-wrap">
                    <img src={hand_icon} alt="hand-icon" />
                  </div>
                </div>
                <div className="hero-description-wrap">
                  <p className="hero-desc-1 display-5 mt-0 mb-0">{heroText}</p>
                  <p className="hero-desc-2 display-5 mt-0 mb-0">
                    {heroDescription}
                  </p>
                </div>
              </div>
              <Link style={{ textDecoration: "none" }} to="/blog">
                <div className="hero-btn-wrap mb-4">
                  <div className="hero-latest-btn">latest collection</div>
                  <img src={arrow_icon} alt="arrow-right" />
                </div>
              </Link>
            </div>
            <div className="col-lg-5 hero-right-wrap">
              <div className="hero-image-wrap">
                <img src={hero_image} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
