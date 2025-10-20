import CoolJob from "../../assets/icons/CoolJob.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={CoolJob} alt="" className={styles.cooljobIcon} />
      <nav>
        <ul>
          <li>
            <a href="">Поиск работы</a>
          </li>
          <li>
            <a href="">Поиск стартапов</a>
          </li>
        </ul>
        <div>
          <a href="">Регистрация</a>
          <button>Вход</button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
