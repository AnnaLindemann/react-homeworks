import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  async function fetchUser() {
    try {
      setError(null);
      setLoad(true);
      const response = await axios.get("https://randomuser.me/api");
      const u = response.data?.results?.[0] || null;
      setUser(u);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Request faild";
      setError(message);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (load) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p> Error:{error}</p>;
  }
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.cont}>
      <h1 className={styles.title}>User:</h1>
      <img
        className={styles.userImg}
        src={user.picture.large}
        alt="Picture of User"
      />
      <h2 className={styles.userName}>
        {user.name.first}, {user.name.last}
      </h2>
      <p className={styles.userEmail}>Email: {user.email}</p>
      <p className={styles.userPhone}>Phone: {user.phone}</p>
      <button className={styles.userBtn} onClick={fetchUser}>
        Load new user
      </button>
    </div>
  );
}
