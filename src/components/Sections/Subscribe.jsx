import React from "react";
import Notification from "../../assets/images/Subscribe/notification.svg";
import SubscribeForm from "../SubscribeForm";

function Subscribe() {
  return (
    <section id="subscribe">
      <div className="container">
        <div className="background-color">
          <div className="grid-row">
            <div className="left-content">
              <img src={Notification} alt="" />
              <h2 className="mobile-tablet-subscribe">
                Subscribe to our newsletter
              </h2>
              <h2 className="desktop-subscribe">
                Subscribe to our newsletter to stay informed about latest
                updates
              </h2>
            </div>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
