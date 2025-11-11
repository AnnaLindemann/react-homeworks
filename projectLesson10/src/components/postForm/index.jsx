import { useForm } from "react-hook-form";
import { PostProvider, usePostContext } from "../../context/PostsContext";

const {state,actions} = usePostContext
export default function PostForm(){
  const {register,handleSubmit,formState:{errors}} = useForm();
function onSubmit(){}
  return(
    <div>
          <form onSubmit={handleSubmit(onSubmit)} >
<input type="text" {...register("title",{required: "You shoukd add the title"})} />
{errors.title && <p>{errors.title.message}</p>}
<input type="text" {...register("text",{required: "You shoukd add the title"})} />
{errors.text && <p>{errors.text.message}</p>}
<button>Send post</button>
    </form>
    </div>
  )
}