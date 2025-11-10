import logo from "../../assets/icons/logo.svg"
import styles from "./styles.module.css"
export default function Header(){
  return(
    <section className={styles.headerCont}>
      
        <img className={styles.logoImg} src={logo} alt="Logo" />
      
      <div className={styles.linkCont}>
        <a className={styles.linkItem} href="Main">Main</a>
        <a className={styles.linkItem} href="Music">Music</a>
        <a className={styles.linkItem} href="Community">Community</a>
        <a className={styles.linkItem} href="Friends">Friends</a>
      </div>
    </section>  )
}