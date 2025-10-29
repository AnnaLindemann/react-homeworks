import { AppleIcon } from "../apppleIcon";
import GoogleIcon from "../googleIcon";
import TwitterIcon from "../twitterIcon";
import styles from "./styles.module.css";
export default function ItemContainer() {
  return (
    <div className={styles.itemCont}>
      <AppleIcon />
      <GoogleIcon />
      <TwitterIcon />
    </div>
  );
}
