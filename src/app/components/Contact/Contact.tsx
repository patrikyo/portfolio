"use client";
import { useState } from "react";
import styles from "./Contact.module.css";
import {
  validateEmailPattern,
  validateNamePattern,
  validatePhone,
  validateMinMaxLength,
} from "./validation";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAdress: "",
    phoneNumber: "",
    userMessage: "",
  });

  const [isFormValid, setIsFormValid] = useState({
    firstName: "",
    lastName: "",
    emailAdress: "",
    phoneNumber: "",
    userMessage: "",
  });

  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (validateNamePattern(value)) {
          setIsFormValid({
            ...isFormValid,
            [name]: `${
              name === "firstName" ? "First" : "Last"
            } name can only contain Letters (a-z,å,ä,ö)`,
          });
        } else if (validateMinMaxLength(value, 2, 50)) {
          setIsFormValid({
            ...isFormValid,
            [name]: `${
              name === "firstName" ? "First" : "Last"
            } name must be between 2 and 50 characters Long`,
          });
        } else {
          setIsFormValid({ ...isFormValid, [name]: "" });
        }
        break;
      case "emailAdress":
        if (validateEmailPattern(value)) {
          setIsFormValid({
            ...isFormValid,
            [name]: "Please enter a valid email adress",
          });
        } else if (validateMinMaxLength(value, 5, 254)) {
          setIsFormValid({
            ...isFormValid,
            [name]: "Email must be between 5 and 254 characters Long",
          });
        } else {
          setIsFormValid({ ...isFormValid, [name]: "" });
        }
        break;
      case "phoneNumber":
        if (validatePhone(value)) {
          setIsFormValid({
            ...isFormValid,
            [name]: "Phone number must be in a valid format",
          });
        } else if (validateMinMaxLength(value, 7, 20)) {
          setIsFormValid({
            ...isFormValid,
            [name]: "Phone number must be between 7 and 20 characters Long",
          });
        } else {
          setIsFormValid({ ...isFormValid, [name]: "" });
        }
        break;
      case "userMessage":
        if (validateMinMaxLength(value, 10, 1000)) {
          setIsFormValid({
            ...isFormValid,
            [name]: "Message must be at least 10 characters Long",
          });
        } else {
          setIsFormValid({ ...isFormValid, [name]: "" });
        }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = JSON.stringify(formData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form,
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
        {/* Förnamn */}
        <div className={styles.contactInputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className={styles.contactInfo}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({
                ...formData,
                firstName: e.target.value.trim(),
              });
              validateInput("firstName", e.target.value.trim());
            }}
            required
          />
          {isFormValid.firstName && (
            <span className={styles.error}>{isFormValid.firstName}</span>
          )}
        </div>

        {/* Efternamn */}
        <div className={styles.contactInputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className={styles.contactInfo}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value.trim() });
              validateInput("lastName", e.target.value.trim());
            }}
            required
          />
          {isFormValid.lastName && (
            <span className={styles.error}>{isFormValid.lastName}</span>
          )}
        </div>

        {/* E-postadress */}
        <div className={styles.contactInputContainer}>
          <label htmlFor="emailAddress">Email</label>
          <input
            id="emailAddress"
            className={styles.contactInfo}
            type="email"
            name="emailAddress"
            value={formData.emailAdress}
            onChange={(e) => {
              setFormData({ ...formData, emailAdress: e.target.value.trim() });
              validateInput("emailAdress", e.target.value.trim());
            }}
            required
          />
          {isFormValid.emailAdress && (
            <span className={styles.error}>{isFormValid.emailAdress}</span>
          )}
        </div>

        {/* Telefonnummer */}
        <div className={styles.contactInputContainer}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            className={styles.contactInfo}
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.target.value.trim() });
              validateInput("phoneNumber", e.target.value.trim());
            }}
          />
          {isFormValid.phoneNumber && (
            <span className={styles.error}>{isFormValid.phoneNumber}</span>
          )}
        </div>

        {/* Meddelande */}
        <div className={styles.contactInputContainer}>
          <label htmlFor="userMessage">Message</label>
          <textarea
            id="userMessage"
            className={`${styles.contactInfo} ${styles.textArea}`}
            name="userMessage"
            value={formData.userMessage}
            onChange={(e) => {
              setFormData({ ...formData, userMessage: e.target.value.trim() });
              validateInput("userMessage", e.target.value.trim());
            }}
            required
          ></textarea>
          {isFormValid.userMessage && (
            <span className={styles.error}>{isFormValid.userMessage}</span>
          )}
        </div>
      </div>
      <button className={styles.sendBtn} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default Contact;
