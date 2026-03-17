import styles from "./styles.module.css"
export default function Header(){
  return(
    <div className={styles.headerCont}>
      <h1 className={styles.headerH}>My Notes App</h1>
    </div>
  )
}