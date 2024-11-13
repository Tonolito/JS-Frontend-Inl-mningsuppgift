import React, { useState } from "react";

function SubscribeForm() {
  const [isValid, setIsValid] = useState();
  const [inputValue, setInputValue] = useState("");
  const [subscribeData, setSubscribeData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubscribeData({ ...subscribeData, [name]: value });
  };

  const validateSubscribeForm = () => {
    const newErrors = {};

    if (
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]{2,}$/.test(
        subscribeData.email
      )
    ) {
      newErrors.email = "Must be a email ";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSuccsess = {};
    if (validateSubscribeForm()) {
      console.log("valid");

      fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(subscribeData),
      });

      newSuccsess.email = "You just subscribed";
      setSuccess(newSuccsess);
      setSubscribeData({ email: "" });
    } else {
      console.log("invalid");
    }
  };

  return (
    <form
      id="subscribeForm"
      className="subscribe-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={`input-group ${isValid ? "valid" : "required"}`}>
        <i className="fa-regular fa-envelope" style={{ color: "#b4b7c9" }}></i>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          value={subscribeData.email}
          onChange={handleInputChange}
          required
        />

        <button className="sub-btn" typeof="submit">
          Subscribe
        </button>
      </div>
      {errors.email && <span className="invalid">{errors.email}</span>}
      {success.email && <span className="valid">{success.email}</span>}
    </form>
  );
}

export default SubscribeForm;
