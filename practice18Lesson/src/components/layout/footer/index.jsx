import styles from "./styles.module.css";

import facebookIcon from "../../../assets/icons/facebookMain.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
  
        <div className={styles.topRow}>
          <div className={styles.contacts}>
            <h3 className={styles.contactsTitle}>Contacts</h3>
            <p className={styles.contactsLine}>8 800 000 00 00</p>
            <p className={styles.contactsLine}>emailexample@gmail.com</p>
          </div>

          <div className={styles.social}>
            <ul className={styles.socialList}>
              <li>
                <a href="#" aria-label="Facebook">
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className={styles.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    className={styles.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className={styles.socialIcon}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

     
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            2024 Sneaker Shop. All rights reserved.
          </p>

          <div className={styles.emailBlock}>
            <label className={styles.emailLabel} htmlFor="footer-email">
              Enter your email:
            </label>
            <input
              id="footer-email"
              type="email"
              className={styles.emailInput}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
