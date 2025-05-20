"use client";
import { useState } from "react";
import styles from "./Contact.module.css";
import { getValidationError } from "./validation";
import ContactField from "@/app/models/enums/ContactField.enum";

const Contact = () => {
  const [formData, setFormData] = useState({
    [ContactField.FirstName]: "",
    [ContactField.LastName]: "",
    [ContactField.EmailAddress]: "",
    [ContactField.PhoneNumber]: "",
    [ContactField.UserMessage]: "",
  });

  const [isFormValid, setIsFormValid] = useState({
    [ContactField.FirstName]: "",
    [ContactField.LastName]: "",
    [ContactField.EmailAddress]: "",
    [ContactField.PhoneNumber]: "",
    [ContactField.UserMessage]: "",
  });

  const validateInput = (name: ContactField, value: string) => {
    const error = getValidationError(name, value);
    setIsFormValid({ ...isFormValid, [name]: error });
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
          <label htmlFor={ContactField.FirstName}>First Name</label>
          <input
            id={ContactField.FirstName}
            className={styles.contactInfo}
            type="text"
            name={ContactField.FirstName}
            value={formData.firstName}
            onChange={(e) => {
              setFormData({
                ...formData,
                [ContactField.FirstName]: e.target.value.trim(),
              });
              validateInput(ContactField.FirstName, e.target.value.trim());
            }}
            required
          />
          {isFormValid.firstName && (
            <span className={styles.error}>{isFormValid.firstName}</span>
          )}
        </div>

        {/* Efternamn */}
        <div className={styles.contactInputContainer}>
          <label htmlFor={ContactField.LastName}>Last Name</label>
          <input
            id={ContactField.LastName}
            className={styles.contactInfo}
            type="text"
            name={ContactField.LastName}
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value.trim() });
              validateInput(ContactField.LastName, e.target.value.trim());
            }}
            required
          />
          {isFormValid.lastName && (
            <span className={styles.error}>{isFormValid.lastName}</span>
          )}
        </div>

        {/* E-postadress */}
        <div className={styles.contactInputContainer}>
          <label htmlFor={ContactField.EmailAddress}>Email</label>
          <input
            id={ContactField.EmailAddress}
            className={styles.contactInfo}
            type="email"
            name={ContactField.EmailAddress}
            value={formData.emailAddress}
            onChange={(e) => {
              setFormData({ ...formData, emailAddress: e.target.value.trim() });
              validateInput(ContactField.EmailAddress, e.target.value.trim());
            }}
            required
          />
          {isFormValid.emailAddress && (
            <span className={styles.error}>{isFormValid.emailAddress}</span>
          )}
        </div>

        {/* Telefonnummer */}
        <div className={styles.contactInputContainer}>
          <label htmlFor={ContactField.PhoneNumber}>Phone Number</label>
          <input
            id={ContactField.PhoneNumber}
            className={styles.contactInfo}
            type="tel"
            name={ContactField.PhoneNumber}
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.target.value.trim() });
              validateInput(ContactField.PhoneNumber, e.target.value.trim());
            }}
          />
          {isFormValid.phoneNumber && (
            <span className={styles.error}>{isFormValid.phoneNumber}</span>
          )}
        </div>

        {/* Meddelande */}
        <div className={styles.contactInputContainer}>
          <label htmlFor={ContactField.UserMessage}>Message</label>
          <textarea
            id={ContactField.UserMessage}
            className={`${styles.contactInfo} ${styles.textArea}`}
            name={ContactField.UserMessage}
            value={formData.userMessage}
            onChange={(e) => {
              setFormData({ ...formData, userMessage: e.target.value.trim() });
              validateInput(ContactField.UserMessage, e.target.value.trim());
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
