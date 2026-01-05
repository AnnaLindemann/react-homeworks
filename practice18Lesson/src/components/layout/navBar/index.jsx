import styles from "./styles.module.css"

export default function  NavBar(){
return(
  <header className={styles.navBar}>
  <div className={styles.navbarCont}>
  <div className={styles.logo}>Sneaker Shop</div>
 <nav className={styles.nav}>
  <a href="/">Home</a>
  <a href="/cart">Cart</a>
  <a href="/contacts">Contacts</a>
 </nav>
  </div>
  
  </header>
)

}