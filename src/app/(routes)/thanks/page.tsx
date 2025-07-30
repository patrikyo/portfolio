import Header from "@/app/components/Header/Header";
import styles from "./page.module.css";
import ThankYouMessage from "@/app/components/ThanksMessage/ThankYouMessage";

const Thanks = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <ThankYouMessage />
    </>
  );
};

export default Thanks;
