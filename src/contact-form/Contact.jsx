import { useState } from "react";
import "./contact.css";
import Navbar from "../navbar/Navbar";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbjadw");
  if (state.succeeded) {
    return <p>Message sent! We will be in touch.</p>;
  }
  return (
    <>
      <div className="firstbox">
        <div className="secondbox">
          <div className="form">
            <form
              onSubmit={handleSubmit}
              className="submit-form form-body"
              type="submit"
            >
              <h2 className="heading1">Contact us today</h2>
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

        <div className="secondbox boxbox">
          <div className="form">
            <form
              onSubmit={handleSubmit}
              className="submit-form form-body"
              type="submit"
            >
              <h2 className="heading1">What happens next</h2>
              <div className="happenscontents">
                <div className="contactindividuals">
                  <FontAwesomeIcon icon={fa1} /> A member of our team reaches
                  out within a few hours to organise a FREE consultation.
                </div>
                <div className="contactindividuals">
                  <FontAwesomeIcon icon={fa2} /> Meanwhile, we sign an NDA to
                  ensure the privacy and protection of your idea.
                </div>
                <div className="contactindividuals">
                  <FontAwesomeIcon icon={fa3} /> We will conduct a FREE
                  consultation to understand your business requirements and will
                  answer any questions you may have.
                </div>
                <div className="contactindividuals">
                  <FontAwesomeIcon icon={fa4} /> Our expert strategist presents
                  project estimates and approximate timelines.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
