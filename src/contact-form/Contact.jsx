import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
      <div className="form-leader">
        <div className="form">
          <div className="form-body contact-body">
            <form onSubmit={handleSubmit} className="submit-form" type="submit">
              <h2 className="heading1">Let's Get in Touch</h2>
              <label className="contact-vars">Name / Company</label>
              <input
                className="contact-input"
                type="text"
                name="name"
                required="yes"
                id="name"
              />
              <label className="contact-vars">Email</label>
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
              <div className="button-container">
                <button className="submit-button" type="submit" name="name">
                  {status}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
