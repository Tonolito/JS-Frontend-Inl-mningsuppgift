import React from "react";
import SendMoney from "../../assets/images/Learn more/send money.svg";
import Contacts from "../../assets/images/Learn more/contacts.svg";
import FeatIcon1 from "../../assets/images/App Features/feat-icon1.svg";
import FeatIcon5 from "../../assets/images/App Features/feat-icon5.svg";
import LearnMoreBtn from "../LearnMoreBtn";
function LearnMore() {
  return (
    <section id="learn-more">
      <div className="container">
        <div className="flex-even">
          <div className="content">
            <h2>Make your money transfer simple and clear</h2>
            <ul>
              <li>Banking transactions are free for you</li>
              <li>No monthly cash commission</li>
              <li>Manage payments and transactions online</li>
            </ul>
            <LearnMoreBtn />
          </div>
          <div className="image-send-money">
            <img src={SendMoney} alt="" />
          </div>
        </div>
        <div id="learn-more-bottom" className="flex-even">
          <div className="image-contacts">
            <img src={Contacts} alt="" />
          </div>
          <div id="contact-headline" className="content">
            <h2>Receive payment from international bank details</h2>
            <div className="app-feat-grid">
              <div id="feat-7" className="feat-box">
                <img src={FeatIcon1} alt="" />

                <p>
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </div>
              <div id="feat-7" className="feat-box">
                <img src={FeatIcon5} alt="" />

                <p>
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </div>
              <LearnMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;
