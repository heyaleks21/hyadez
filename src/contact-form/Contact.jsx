import { useState } from "react";
import "./contact.css";
import Navbar from "../navbar/Navbar";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbjadw");
  if (state.succeeded) {
    return <p>Message sent! We will be in touch.</p>;
  }
  return (
    <>
      <div className="secondbox">
        <div className="form">
          <form
            onSubmit={handleSubmit}
            className="submit-form form-body"
            type="submit"
          >
            <h2 className="heading1">Let's Get in Touch</h2>
            <label className="contact-vars">Name / Company</label>
            <input
              className="contact-input"
              type="text"
              name="name"
              required="yes"
              id="name"
            />
            <label className="contact-vars" htmlFor="email">
              Email
            </label>
            <input
              className="contact-input"
              type="email"
              name="email"
              required="yes"
              id="email"
            />
            <label className="contact-vars">Phone / Mobile</label>
            <input
              className="contact-input"
              type="number"
              name="phone-number"
              required="yes"
              id="phone"
            />
            <label className="contact-vars">Query / Comments</label>
            <textarea
              className="contact-input"
              type="textarea"
              name="msg"
              required="yes"
              rows="4"
              id="message"
            />
            <div className="footer footer2">
              <button
                className="btn"
                type="submit"
                name="name"
                disabled={state.submitting}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
