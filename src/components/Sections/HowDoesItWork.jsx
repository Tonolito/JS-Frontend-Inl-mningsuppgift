import React from "react";
import IPhoneLeft from "../../assets/images/How does it work/Iphone 12 Pro left.svg";
import IPhoneMiddle from "../../assets/images/How does it work/Iphone 12 Pro middle.svg";
import IPhoneRight from "../../assets/images/How does it work/Iphone 12 Pro right.svg";
import IPhoneTransfer from "../../assets/images/How does it work/Iphone12 Pro transfer mobile.svg";
function Howdoesitwork() {
  return (
    <section id="How-does-it-work">
      <div className="container">
        <div className="headline">
          <h2>How Does It Work?</h2>
        </div>
        <div className="images">
          <img id="img-my-budget" src={IPhoneLeft} alt="" />
          <img id="img-your-cards" src={IPhoneMiddle} alt="" />
          <img id="img-transfer" src={IPhoneRight} alt="" />
          <img id="img-transfer-mobile" src={IPhoneTransfer} alt="" />
        </div>
        <div className="content">
          <h3 id="h3-mobile">Transfers to people from your contact list</h3>
          <h3 id="h3-tablet">
            Step 3. Transfers to people from your contact list
          </h3>
          <h3 id="h3-desktop">Latest transaction history</h3>
          <p id="p-mobile-tablet">
            Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
          <p id="p-desktop">
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
            Arcu sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Howdoesitwork;
