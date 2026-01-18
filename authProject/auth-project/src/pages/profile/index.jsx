import styles from "./styles.module.css";

function Profile() {
  const handleLogout = () => {};
  return (
    <div className={styles.container}>
      {/* <h1>{tokenData ? tokenData.user.id : "Login into account"}</h1> */}
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
