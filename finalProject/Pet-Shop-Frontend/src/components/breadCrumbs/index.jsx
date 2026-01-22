import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function BreadCrumbs({ items }) {
  return (
    <nav className={styles.breadCrumbs}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div className={`${styles.breadCrumbsItem} ${isLast ? styles.breadCrumbsItemLast : ""}`} key={index}>
            {item.to && !isLast ? (
              <Link to={item.to} className={styles.breadCrumbsLink}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.breadCrumbsCurrent}>
                {item.label}
              </span>
            )}

            {!isLast && <span className={styles.breadCrumbsLine} />}
          </div>
        );
      })}
    </nav>
  );
}

export default BreadCrumbs;
