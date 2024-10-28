import React from "react";
import IPhoneCard from "../../assets/images/App Features/Iphone 12 Pro Your cards.svg";
import FeatIcon1 from "../../assets/images/App Features/feat-icon1.svg";
import FeatIcon2 from "../../assets/images/App Features/feat-icon2.svg";
import FeatIcon3 from "../../assets/images/App Features/feat-icon3.svg";
import FeatIcon4 from "../../assets/images/App Features/feat-icon4.svg";
import FeatIcon5 from "../../assets/images/App Features/feat-icon5.svg";
import FeatIcon6 from "../../assets/images/App Features/feat-icon6.svg";

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div id="app-feat">
          <div className="image-app-feat">
            <img src={IPhoneCard} alt="" />
          </div>
          <div className="app-feat-content">
            <h2>App Features</h2>
            <p id="feat-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
            <div className="app-feat-grid">
              <div id="feat-1" className="feat-box">
                <img src={FeatIcon1} alt="" />
                <h3>Easy Payments</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
              <div id="feat-2" className="feat-box">
                <img src={FeatIcon2} alt="" />
                <h3>Data Security</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
              <div id="feat-3" className="feat-box">
                <img src={FeatIcon3} alt="" />
                <h3>Cost Statistics</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
              <div id="feat-4" className="feat-box">
                <img src={FeatIcon4} alt="" />
                <h3>Support 24/7</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
              <div id="feat-5" className="feat-box">
                <img src={FeatIcon5} alt="" />
                <h3>Regular Cashback</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
              <div id="feat-6" className="feat-box">
                <img src={FeatIcon6} alt="" />
                <h3>Top Standards</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
