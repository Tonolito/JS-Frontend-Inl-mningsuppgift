import React from "react";
import MapImage from "../../assets/images/Contact/map.svg";
import FacebookIcon from "../../assets/images/Contact/Facebook logo.svg";
import InstagramIcon from "../../assets/images/Contact/Instagram logo.svg";
import YoutubeIcon from "../../assets/images/Contact/Youtube logo.svg";
import TwitterIcon from "../../assets/images/Contact/Twitter logo.svg";
import LocationCard from "../LocationCard";
const ContactInformation = () => {
  return (
    <section id="contact-information">
      <div className="container">
        <div className="left-image">
          <img src={MapImage} alt="" />
        </div>
        <div className="right-locations">
          <div className="locations-headline">Locations</div>
          <LocationCard />
          <div className="location-card">
            <div className="headline-location">
              <h3>Medical Center 2</h3>
            </div>
            <div className="address-location">
              <i className="fa-light fa-location-dot"></i>
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <div className="phone-number-location">
              <i className="fa-light fa-phone-volume"></i>
              <p>(406) 544-0123</p>
            </div>
            <div className="opening-hours-location">
              <div className="logo-location">
                <i className="fa-light fa-clock"></i>
              </div>
              <div className="opening-hours-content">
                <p>
                  <b>Mon – Fri:</b> 9:00 am – 22:00 am
                </p>
                <p>
                  <b>Sat – Sun:</b> 9:00 am – 20:00 am
                </p>
              </div>
            </div>
          </div>
          <div className="social-bar">
            <div className="social-media-btn">
              <img src={FacebookIcon} alt="" />
            </div>
            <div className="social-media-btn">
              <img src={TwitterIcon} alt="" />
            </div>
            <div className="social-media-btn">
              <img src={InstagramIcon} alt="" />
            </div>
            <div className="social-media-btn">
              <img src={YoutubeIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
