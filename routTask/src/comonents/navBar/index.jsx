import Link from "../link"
import styles from "./styles.module.css"
export default function NavBar(){
  return (
    <nav>
      <div className={styles.navCont}>
        <Link className={styles.navItem} path={"/"} title="Home"/>
 <Link className={styles.navItem} path={"/users"} title="Users"/>
      </div>
    </nav>
  )
}