import { useForm } from "react-hook-form";
import { usePostContext } from "../../context/PostsContext";


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
    <div>
          <form onSubmit={handleSubmit(onSubmit)} >
<input type="text" {...register("title",{required: "You should add the title"})} />
{errors.title && <p>{errors.title.message}</p>}
<input type="text" {...register("text",{required: "You should add the text"})} />
{errors.text && <p>{errors.text.message}</p>}
<button>Send post</button>
    </form>
    </div>
  )
}