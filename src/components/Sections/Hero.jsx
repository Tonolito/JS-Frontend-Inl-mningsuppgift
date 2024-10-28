import React from "react";
import AppStoreLight from "../../assets/images/Hero/Appstore.svg";
import AppStoreDark from "../../assets/images/Hero/AppStore darkMode.svg";
import GooglePlayLight from "../../assets/images/Hero/Googleplay.svg";
import GooglePlayDark from "../../assets/images/Hero/GooglePlay darkMode.svg";
import IPhoneBack from "../../assets/images/Hero/iPhone 12 Pro back.svg";
import IPhoneFront from "../../assets/images/Hero/iPhone 12 Pro front.svg";

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
          <p>
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          <div className="buttons">
            <a className="btn-download-app" href="#">
              <img className="lightMode-btn" src={AppStoreLight} alt="" />
              <img className="darkMode-btn" src={AppStoreDark} alt="" />
            </a>
            <a className="btn-download-app" href="#">
              <img className="lightMode-btn" src={GooglePlayLight} alt="" />
              <img className="darkMode-btn" src={GooglePlayDark} alt="" />
            </a>
          </div>
          <a href="#" className="discover-more">
            <span className="btn-circle" href="#">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>
        <div className="images">
          <img className="img-back" src={IPhoneBack} alt="" />
          <img className="img-front" src={IPhoneFront} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
