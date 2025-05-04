"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");

  // name validation state
  const [isFirstNameInvalidCharacters, setIsFirstNameInvalidCharacters] =
    useState(false);
  const [isLastNameInvalidCharacters, setIsLastNameInvalidCharacters] =
    useState(false);
  const [isFirstNameInvalidLength, setIsFirstNameInvalidLength] =
    useState(false);
  const [isLastNameInvalidLength, setIsLastNameInvalidLength] = useState(false);

  // email validation state
  const [isEmailInvalidLength, setIsEmailInvalidLength] = useState(false);
  const [isEmaiInvalidPattern, setIsEmailInvalidPattern] = useState(false);

  // phone validation state
  const [isPhoneInvalidFormat, setIsPhoneInvalidFormat] = useState(false);
  const [isPhoneInvalidLength, setIsPhoneInvalidLength] = useState(false);

  // message validation state
  const [isMessageInvalidMinLength, setIsMessageInvalidMinLength] =
    useState(false);
  const [isMessageInvalidMaxLength, setIsMessageInvalidMaxLength] =
    useState(false);

  const validateInput = (input: { type: string; value: string }) => {
    switch (input.type) {
      case "name":
      case "lastName":
        validateName(input.value, input.type);
        break;
      case "email":
        validateEmail(input.value);
        break;
      case "phoneNumber":
        validatePhone(input.value);
        break;
      case "userMessage":
        validateMessage(input.value);
    }
  };

  const validateName = (name: string, type: string) => {
    const nonAlphabetRegex = /[^a-zåäö]/gi;

    if (nonAlphabetRegex.test(name)) {
      type === "name"
        ? setIsFirstNameInvalidCharacters(true)
        : setIsLastNameInvalidCharacters(true);
    } else {
      type === "name"
        ? setIsFirstNameInvalidCharacters(false)
        : setIsLastNameInvalidCharacters(false);
    }

    if (name.length < 2 || name.length > 50) {
      type === "name"
        ? setIsFirstNameInvalidLength(true)
        : setIsLastNameInvalidLength(true);
    } else {
      type === "name"
        ? setIsFirstNameInvalidLength(false)
        : setIsLastNameInvalidLength(false);
    }
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length < 5 || value.length > 254) {
      setIsEmailInvalidLength(true);
    } else {
      setIsEmailInvalidLength(false);
    }

    if (!emailRegex.test(value)) {
      setIsEmailInvalidPattern(true);
    } else {
      setIsEmailInvalidPattern(false);
    }
  };

  const validatePhone = (value: string) => {
    const phoneNumberRegex = /^((00|\+)[1-9]{2}|0)[1-9\s\-][0-9\s\-]*$/;
    if (!phoneNumberRegex.test(value)) {
      setIsPhoneInvalidFormat(true);
    } else {
      setIsPhoneInvalidFormat(false);
    }
  };

  const validateMessage = (value: string) => {
    if (value.length < 10) {
      setIsMessageInvalidMinLength(true);
    } else {
      setIsMessageInvalidMinLength(false);
    }

    if (value.length > 1000) {
      setIsMessageInvalidMaxLength(true);
    } else {
      setIsMessageInvalidMaxLength(false);
    }
  };
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
        {/* Förnamn */}
        <div className={styles.contactInputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className={styles.contactInfo}
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value.trim());
              validateInput({ type: "name", value: e.target.value.trim() });
            }}
            required
          />
          {isFirstNameInvalidCharacters && (
            <span className={styles.error}>
              First name can only contain letters (a-z, å, ä, ö).
            </span>
          )}
          {isFirstNameInvalidLength && (
            <span className={styles.error}>
              First name must be between 2 and 50 characters long.
            </span>
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
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value.trim());
              validateInput({ type: "lastName", value: e.target.value.trim() });
            }}
            required
          />
          {isLastNameInvalidCharacters && (
            <span className={styles.error}>
              Last name can only contain letters (a-z, å, ä, ö)
            </span>
          )}
          {isLastNameInvalidLength && (
            <span className={styles.error}>
              Last name must be between 2 and 50 characters long
            </span>
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
            value={emailAddress}
            onChange={(e) => {
              setEmailAddress(e.target.value.trim());
              validateInput({ type: "email", value: e.target.value.trim() });
            }}
            required
          />
          {isEmailInvalidLength && (
            <span className={styles.error}>
              Email must be between 5 and 254 characters long.
            </span>
          )}
          {isEmaiInvalidPattern && (
            <span className={styles.error}>
              Please enter a valid email address
            </span>
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
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value.trim());
              validateInput({
                type: "phoneNumber",
                value: e.target.value.trim(),
              });
            }}
          />
          {isPhoneInvalidFormat && (
            <span className={styles.error}>
              Phone number format must be xxxxxxxx-xx
            </span>
          )}
        </div>

        {/* Meddelande */}
        <div className={styles.contactInputContainer}>
          <label htmlFor="userMessage">Message</label>
          <textarea
            id="userMessage"
            className={`${styles.contactInfo} ${styles.textArea}`}
            rows={50}
            cols={50}
            name="userMessage"
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value.trim());
              validateInput({
                type: "userMessage",
                value: e.target.value.trim(),
              });
            }}
            required
          ></textarea>
          {isMessageInvalidMinLength && (
            <span className={styles.error}>
              Message must be at least 10 characters long.
            </span>
          )}
          {isMessageInvalidMinLength && (
            <span className={styles.error}>
              Message cannot exceed 1000 characters.
            </span>
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
