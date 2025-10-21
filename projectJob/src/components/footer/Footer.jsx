import FooterUp from "./footerUp/FooterUp";
import styles from "./Footer.module.css";
import FooterDowm from "./footerDown/FooterDown";
export default function Footer() {
  return (
    <div className={styles.footerCont}>
      <FooterUp />
      <FooterDowm />
    </div>
  );
}
