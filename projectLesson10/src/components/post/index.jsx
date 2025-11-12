import styles from "./styles.module.css"
export default function Post({onDelete, id, title,text,avatar}){
const FALLBACK_AVATAR = "https://i.pravatar.cc/80?u=default"
  return(
    <div className={styles.postCont}>
   <div className={styles.postAvatarCont}>
    <img className={styles.postImg} src={avatar || FALLBACK_AVATAR} alt="Avatar" />
   <h4>User Logo</h4>
   </div>
   <div className={styles.postContentCont}>
<h3>{title}</h3>
<p>{text}</p>
   </div>
   <div className={styles.postBtnCont}>
    <h3>post {id}</h3>
    <button className={styles.postBtn} onClick={onDelete}>Delete</button>
   </div>
    </div>
  )


}