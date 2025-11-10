import { useForm } from "react-hook-form";
import group from "../../assets/icons/Group.svg"

export default function PostForm(){
  const {register,handleSubmit,formState:{errors}} = useForm();

  return(
    <div>
          <form >
<input type="text" {...register("title",{required: "You shoukd add the title"})} />
<input type="text" {...register("text",{required: "You shoukd add the title"})} />
    </form>
    </div>
  )
}