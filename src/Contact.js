import React, { useState } from "react";

const Contact = ({ onFormSubmit, responseMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData); 
    setFormData({ name: "", email: "", contact: "", message: "" });
  };

  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <h2>Contact Us</h2>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">SEND</button>
        </form>

        {responseMessage && (
          <p style={{ marginTop: "10px", color: "green" }}>
            {responseMessage}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
