"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = JSON.stringify({
      firstName,
      lastName,
      email: emailAddress,
      phone: phoneNumber,
      message: userMessage,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData,
    };
    fetch("http://localhost:3200/api/contact", requestOptions)
      .then(() => console.log("Form submitted successfully"))
      .catch((err) => {
        console.error("Error submitting form:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className={styles.contactInfo}
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className={styles.contactInfo}
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="emailAddress">Email</label>
          <input
            id="emailAddress"
            className={styles.contactInfo}
            type="email"
            name="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            className={styles.contactInfo}
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="userMessage">Message</label>
          <textarea
            id="userMessage"
            className={styles.contactInfo}
            name="userMessage"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <button className={styles.sendBtn} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default Contact;
