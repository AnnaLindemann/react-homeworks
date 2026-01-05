import styles from "./styles.module.css";
import bannerImg from "../../assets/images/Banner.png";

export default function Banner(){
return(

<section className={styles.bannerCont}>
 <div className={styles.bannerCont}>
 <img src={bannerImg} alt="Sneaker Shop" className={styles.bannerImage} />
 </div>
</section>
)

}