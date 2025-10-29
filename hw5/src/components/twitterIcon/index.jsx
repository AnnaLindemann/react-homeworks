import styles from "./styles.module.css";

export default function twitterIcon() {
  return (
    <div className={styles.logo} aria-label="X logo">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M17.49 3H20.5l-6.74 7.71L21 21h-6.42l-5.01-5.84L3.84 21H0.82l7.19-8.23L3 3h6.58l4.49 5.22L17.49 3zM16.4 19h1.77L8.19 5H6.31l10.09 14z"
        />
      </svg>
    </div>
  );
}
