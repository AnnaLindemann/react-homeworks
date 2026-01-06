import styles from "./styles.module.css"
import { NavLink } from "react-router-dom"

export default function  NavBar(){
return(
  <header className={styles.navBar}>
  <div className={styles.navbarCont}>
  <div className={styles.logo}>Sneaker Shop</div>
 <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Cart
          </NavLink>

          <NavLink to="/contacts" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Contacts
          </NavLink>
        </nav>
  </div>
  
  </header>
)

}