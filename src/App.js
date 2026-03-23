import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Footer.js";
import Main from "./Main.js";
import Header from "./Header.js";
import About from "./About.js";
import Home from "./Home.js";
import Jewellery from "./Jewellery.js";
import Contact from "./Contact.js";
import Login from "./Login.js";

const App = () => {
  const [responseMessage, setResponseMessage] = useState("");

  // Function to handle form submission from Contact.js
  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(
        "https://disha-ecommerce-backend.onrender.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
      } else {
        setResponseMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route
          path="/contact"
          element={
            <Contact
              onFormSubmit={handleFormSubmit}
              responseMessage={responseMessage}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
