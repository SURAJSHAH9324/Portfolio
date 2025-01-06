import React, { useState } from "react";
import "./Contact.css";

function Contact({ isToggled }) {
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1e1ecbb0-8606-48c5-b56f-dd98f60958bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      {showToast && (
        <div className="toast-message">
          {result} {/* Display message in toast */}
        </div>
      )}

      <form className="contact-form" onSubmit={onSubmit}>
        <h1 className={`${isToggled ? "text-white" : ""}`}>Let's Work Together</h1>
        <p className={`${isToggled ? "text-white" : ""}`}>We would love to hear from you!</p>
        
        <div className="form-group">
          <label className={`${isToggled ? "text-white" : ""}`}>Name</label>
          <input  type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label className={`${isToggled ? "text-white" : ""}`}>Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label className={`${isToggled ? "text-white" : ""}`}>Message</label>
          <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
