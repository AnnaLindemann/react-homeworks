import { useForm } from "react-hook-form";
import { usePostContext } from "../../context/PostsContext";
import styles from "./styles.module.css"


export default function PostForm(){
  const {actions} = usePostContext()
  const {addPost} = actions
  const {register,handleSubmit,reset, formState:{errors}} = useForm();
function onSubmit(data){
const newPost = {title:data.title,text: data.text,avatar:"https://avatars.githubusercontent.com/u/96827151"}
addPost(newPost)
reset()
}



  return(
    <div className={styles.postFormMainCont}>
        <h2>Write the post</h2>
        <div className={styles.postFormCont}>
          <img className={styles.postFormAvatar} src="https://placehold.co/120x120?text=I+Love+React" alt="Avatar" />
          <form className={styles.formPost} onSubmit={handleSubmit(onSubmit)} >
           <div className={styles.postFormInputCont}> 
            <label  className={styles.postFormLabel}  htmlFor="titel">Title</label>
<input id="title" className={styles.postFormInput} type="text" {...register("title",{required: "You should add the title"})} placeholder="Title" />
{errors.title && <p>{errors.title.message}</p>}
<label className={styles.postFormLabel} htmlFor="text">Post text</label>
<input id="text
" className={styles.postFormInput}  type="text" {...register("text",{required: "You should add the text"})} placeholder="Enter the text" />
{errors.text && <p>{errors.text.message}</p>}
</div>
<div className={styles.formPostBtnCont}><button type="submit" className={styles.formPostBtn} >Send post</button></div>
    </form></div>
        
    </div>
  )
}