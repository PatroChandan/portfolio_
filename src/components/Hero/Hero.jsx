import React from "react";
import "./Hero.css";
import react from "../../assets/icons8-react-js-480.png";
import developer from "../../assets/undraw_developer_activity_re_39tg.svg";
import html from "../../assets/icons8-html-480.png";
import css from "../../assets/icons8-css-240.png";
import javascript from "../../assets/icons8-javascript-480.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={react} alt="" />
          </div>
          <img src={developer} alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={html} alt="" />
          </div>
          <div className="tech-icon">
            <img src={css} alt="" />
          </div>
          <div className="tech-icon">
            <img src={javascript} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
