import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="submit-container">
        <form className="submit-form" type="submit">
          <h2 className="heading1">Let's Get in Touch</h2>
          <label className="contact-vars">Name / Company</label>
          <input type="text" name="name" required="yes" />
          <label className="contact-vars">Email</label>
          <input type="email" name="email" required="yes" />
          <label className="contact-vars">Phone / Mobile</label>
          <input type="number" name="phone-number" required="yes" />
          <label className="contact-vars">Query / Comments</label>
          <textarea type="textarea" name="msg" required="yes" rows="5" />
          <div className="button-container">
            <button className="submit-button" type="submit" name="name">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
