import styles from "./Blocklogos.module.css";
import Disney from "../../assets/icons/Disney.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Microsoft from "../../assets/icons/Microsoft.svg";
import Sony from "../../assets/icons/Sony.svg";
import Cola from "../../assets/icons/Cola.svg";

export default function BlockLogos() {
  return (
    <section>
      <div className={styles.blockTitleCont}>
        <h3 className={styles.blockTitle}>Помогаем найти работу:</h3>
      </div>
      <div className={styles.imgCont}>
        <img src={Disney} alt="Disney" />
        <img src={Facebook} alt="Facebook" />
        <img src={Microsoft} alt="Microsoft" />
        <img src={Sony} alt="Sony" />
        <img src={Cola} alt="Cola" />
      </div>
    </section>
  );
}
