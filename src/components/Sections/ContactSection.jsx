import React from "react";
import FormCard from "../FormCard";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="headline-contact">Contact Us</div>
        <div className="contact-left-content">
          <div className="explore">
            <i className="fa-sharp fa-thin fa-house"></i>
            <p>Homepage</p>
            <i className="fa-thin fa-angles-right"></i>
            <p>Contact</p>
          </div>

          <div className="email contact-card">
            <div className="btn-circle card-logo">
              <i
                className="fa-regular fa-envelope fa-lg"
                style={{ color: "#6366f1" }}
              ></i>
            </div>

            <div className="card-content">
              <div className="card-headline">Email</div>
              <p className="card-text">
                Sit ac ipsum leo lorem magna nunc mattis maecenas non
                vestibulum.
              </p>
              <div className="arrow-text">
                <p>Leave a message</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="careers contact-card">
            <div className="btn-circle card-logo">
              <i
                className="fa-light fa-users-medical fa-xl"
                style={{ color: "#6366f1" }}
              ></i>
            </div>

            <div className="card-content">
              <div className="card-headline">Careers</div>
              <p className="card-text">
                Sit ac ipsum leo lorem magna nunc mattis maecenas non
                vestibulum.
              </p>
              <div className="arrow-text">
                <p>Send an application</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="btn-container">
            <a id="contact-btn" className="btn-primary" href="#">
              <span>Contact us now</span>
            </a>
          </div>
        </div>

        <div className="contact-right-content">
          <FormCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
