import snapchatIcon from "../../assets/icons/snapchat.svg";
import facebookIcon from "../../assets/icons/facebookBascet.svg";
import xIcon from "../../assets/icons/x.svg";

import styles from "./styles.module.css";

const ContactPage = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Contacts</h1>

          <ul className={styles.info}>
            <li>+49 123 456 789</li>
            <li>info@example.com</li>
          </ul>

          <form className={styles.form}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input
              type="text"
              placeholder="Message"
              className={styles.message}
            />

            <button type="submit" className={styles.submit}>
              Send
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <div className={styles.socialCard}>
            <p className={styles.socialTitle}>Find us on</p>

            <div className={styles.socials}>
              <a href="#" className={styles.snapchat}>
                <img src={snapchatIcon} alt="Snapchat" />
              </a>
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={xIcon} alt="X" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
