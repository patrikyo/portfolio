import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <form>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInputContainer}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={styles.contactInfo}
            type="text"
            name="name"
            required
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="surname">Last name</label>
          <input
            id="surname"
            className={styles.contactInfo}
            type="text"
            name="surname"
            required
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={styles.contactInfo}
            type="email"
            name="email"
            required
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            className={styles.contactInfo}
            type="tel"
            name="phone"
          />
        </div>
        <div className={styles.contactInputContainer}>
          <label htmlFor="contactMessage">Message</label>
          <textarea
            id="contactMessage"
            className={styles.contactInfo}
            name="message"
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
