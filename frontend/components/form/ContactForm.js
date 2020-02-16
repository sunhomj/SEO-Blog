import { useState } from "react";
import Link from "next/link";
import { emailContactForm } from "../../actions/form";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
    success: false,
    error: false
  });
  const { name, email, message, sent, buttonText, success, error } = values;

  const clickSubmit = e => {
    e.preventDefault();
  };

  const handleChange = name => e => {
    setValues({
      ...values,
      [name]: e.target.value,
      error: false,
      success: false,
      buttonText: "Send Message"
    });
  };

  const contactForm = () => {
    return (
      <form onSubmit={clickSubmit} className="pb-5">
        <div className="form-group">
          <label className="lead">Message</label>
          <textarea
            onChange={handleChange("message")}
            className="form-control"
            value={message}
            required
            type="text"
            rows="10"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="lead">Name</label>
          <input
            type="text"
            onChange={handleChange("name")}
            className="form-control"
            value={name}
            required
          />
        </div>

        <div className="form-group">
          <label className="lead">Email</label>
          <input
            type="email"
            onChange={handleChange("email")}
            className="form-control"
            value={email}
            required
          />
        </div>
        <div>
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      <p>{contactForm()}</p>
    </React.Fragment>
  );
};

export default ContactForm;
