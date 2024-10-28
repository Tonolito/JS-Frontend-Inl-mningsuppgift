import React from "react";
import Accordion from "../Accordion";

function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <div className="top-text">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>

        <Accordion />

        <div className="cards">
          <div className="contact-us-card">
            <i
              className="fa-solid fa-phone-volume fa-2xl"
              style={{ color: "#6366f1" }}
            ></i>
            <p>Still have questions?</p>
            <p className="contact-us">
              Contact us
              <i
                className="fa-solid fa-arrow-right"
                style={{ color: "#6366f1" }}
              ></i>
            </p>
          </div>
          <div className="contact-us-card">
            <i
              className="fa-solid fa-comment-dots fa-2xl"
              style={{ color: "#22c55e" }}
            ></i>
            <p>Don't like phone calls?</p>
            <p className="contact-us" id="contact-us-message">
              Contact us
              <i
                className="fa-solid fa-arrow-right"
                style={{ color: "#22c55e" }}
              ></i>
            </p>
          </div>
        </div>

        <div className="btn-container">
          <a id="contact-btn" className="btn-primary" href="">
            <span>Contact us now</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;
