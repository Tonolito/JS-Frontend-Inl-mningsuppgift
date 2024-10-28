import React, { useState } from "react";

function SubscribeForm() {
  const [isValid, setIsValid] = useState();

  function validation(e) {
    e.prevent;
    if (!input.value === "" || "@") return false;
  }

  return (
    <form id="subscribeForm" className="subscribe-form">
      <div className="input-group">
        <i className="fa-regular fa-envelope" style={{ color: "#b4b7c9" }}></i>
        <input type="email" name="email" id="email" placeholder="Your email" />
        <button className="sub-btn" typeof="submit">
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default SubscribeForm;
