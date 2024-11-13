import React from "react";

const LocationCard = () => {
  return (
    <div className="location-card">
      <div className="headline-location">
        <h3>Medical Center 1</h3>
      </div>
      <div className="address-location">
        <i className="fa-light fa-location-dot"></i>
        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
      </div>
      <div className="phone-number-location">
        <i className="fa-light fa-phone-volume"></i>
        <p>(406) 555-0120</p>
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
  );
};

export default LocationCard;
