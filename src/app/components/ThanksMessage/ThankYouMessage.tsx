import {
  faAngleLeft,
  faCircleCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ThankYouMessage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const ThankYouMessage = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <FontAwesomeIcon icon={faCircleCheck} id={styles.checkIcon} />
        <h2>Thanks for your message!</h2>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.infoMessage}>
          We have received your message and will get back to you shortly.
        </span>
        <div className={styles.responseTimeContainer}>
          <FontAwesomeIcon icon={faClock} id={styles.clockIcon} />
          <span className={styles.responseTime}>
            I usually respond within 24 hours.
          </span>
        </div>

        <Link href="/" className={styles.link}>
          <div className={styles.linkBtnContainer}>
            <FontAwesomeIcon icon={faAngleLeft} id={styles.angleIcon} />
            <span>Till startsidan</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ThankYouMessage;
