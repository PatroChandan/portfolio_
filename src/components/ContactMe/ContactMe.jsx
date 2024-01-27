import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import github from "../../assets/icons8-github.svg";
import email from "../../assets/icons8-email-96.png";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={email} text={"chandanpatro789@gmail.com"} />
          <ContactInfoCard
            iconUrl={github}
            text={"https://github.com/PatroChandan"}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
