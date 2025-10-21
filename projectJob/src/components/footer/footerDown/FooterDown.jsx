import CooljobFooter from "../../../assets/icons/CooljobFooter.svg";
import LinkedIn from "../../../assets/icons/Linkedin.svg";
import Google from "../../../assets/icons/Google.svg";
import Twitter from "../../../assets/icons/Twitter.svg";
import FacebookFooter from "../../../assets/icons/FacebookFooter.svg";
import styles from "./FooterDown.module.css";

export default function FooterDowm() {
  return (
    <div className={styles.footerDownCont}>
      <img
        className={styles.footerDownLogo}
        src={CooljobFooter}
        alt="CoolJob Logo"
      />
      <div className={styles.footerImgCont}>
        <img
          className={styles.footerDownImg}
          src={LinkedIn}
          alt="LinkedIn Icon"
        />
        <img className={styles.footerDownImg} src={Google} alt="Google Icon" />
        <img
          className={styles.footerDownImg}
          src={Twitter}
          alt="Twitter Icon"
        />
        <img
          className={styles.footerDownImg}
          src={FacebookFooter}
          alt="Facebook Icon"
        />
      </div>
    </div>
  );
}
