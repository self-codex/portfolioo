import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import Swal from "sweetalert2";
import MAIL_IMG from "../../image/mailz.jpeg";

const Contact = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });
  // <FontAwesomeIcon icon="fab fa-linkedin-in" />
  const { name, email, subject, company, message } = userForm;

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const formSubmint = (e) => {
    e.preventDefault();
    if (name && email && company && message && subject !== "") {
      axios.post("/mail", userForm);
      setTimeout(() => {
        Swal.fire("Status", "Your Mail Send Success", "success");
        setUserForm({
          name: "",
          email: "",
          subject: "",
          company: "",
          message: "",
        });
      }, 500);
    } else {
      Swal.fire("Oops...", "Please Fill all Fields!", "error");
    }
  };

  return (
    <>
      <h1>Contact Me</h1>
      <div className="contact container-lg" id="contact">
        <div className="social-icons">
          <h2>
            Get In Touch <i className="fas fa-envelope"></i>
          </h2>
          <p className="icons">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmltWXJSvSLqXBbjfJCgQgjKFLxHxLNmRFXstRJXPtBBdcbLHCPnkBRCmNLnwGGPRPzwxH"
              target={"_blank"}
            >
              <i className="fab fa-google-plus-square"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmltWXJSvSLqXBbjfJCgQgjKFLxHxLNmRFXstRJXPtBBdcbLHCPnkBRCmNLnwGGPRPzwxH"
              target={"_blank"}
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/self-codex/" target={"_blank"}>
              {/* <i className="fab fa-linkedin-in"></i> */}
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/self-codex" target={"_blank"}>
              <i className="fab fa-github-square"></i>
            </a>
          </p>
        </div>
        <div className="form-container">
          <div className="img-container">
            <h3>Send your Email Here!</h3>
            <img src={MAIL_IMG} alt="MAIL-IMG" className="b-block w-100" />
          </div>
          <form
            className="userForm"
            method="post"
            onSubmit={formSubmint}
            autoComplete="off"
          >
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={inputEvent} />
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputEvent}
            />
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={inputEvent}
            />
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={inputEvent}
            />
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={inputEvent}
            />
            <button className="btn-default" type="submit">
              Send<i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
