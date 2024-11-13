import React, { useState } from "react";

const FormCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialist: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateField = (name, value) => {
    let error = "";
    if (name === "fullName" && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
      error = "Must be a real name";
    } else if (
      name === "email" &&
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]{2,}$/.test(value)
    ) {
      error = "Must be a real Email";
    } else if (name === "specialist" && !/^[A-Öa-ö\s\-]{1,}$/.test(value)) {
      error = "Must be atleast 1 char";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Must be a real name";
    }

    if (
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Must be a valid email address";
    }

    if (!/^[A-Öa-ö\s\-]{1,}$/.test(formData.fullName)) {
      newErrors.email = "Must be atleast 1 char";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("valid");

      fetch("https://win24-assignment.azurewebsites.net/api/forms/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSuccess("You made an appointment");
      setFormData({ fullName: "", email: "", specialist: "" });
    } else {
      console.log("invalid");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-card" noValidate>
      <div className="form-headline">Get Online Consultation</div>
      {success && <span className="valid">{success}</span>}

      <div className="input-group">
        <label htmlFor="fullname" className="form-label">
          Full name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullname"
          className="form-input"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        {errors.fullName && <span className="invalid">{errors.fullName}</span>}
      </div>

      <div className="input-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <span className="invalid">{errors.email}</span>}
      </div>

      <div className="input-group">
        <label htmlFor="specialist" className="form-label">
          Specialist
        </label>
        <input
          type="text"
          name="specialist"
          id="specialist"
          className="form-input"
          value={formData.specialist}
          onChange={handleInputChange}
          required
        />
        {errors.specialist && (
          <span className="invalid">{errors.specialist}</span>
        )}
      </div>

      <button type="submit" className="btn-primary form-button">
        Make an appointment
      </button>
    </form>
  );
};

export default FormCard;
