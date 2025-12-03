import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions";
import styles from "./styles.module.css"

function UserForm({dispatch}){
  const {register,handleSubmit,formState:{errors}, reset} = useForm();


const onSubmit = (data) => {
  dispatch(setUserInfo({name: data.name,status:data.status}));
reset()
 
}
  return(
    <form className={styles.formCont} onSubmit={handleSubmit(onSubmit)} >
      <input type="text" {...register("name", {required: "Name is required"})}  placeholder="Name"/>
      {errors.name && <p>{errors.name.message}</p>}
      <input type="text" {...register("status",{required: "Status is required"})} placeholder="Status"/>
     {errors.status && <p>{errors.status.message}</p>}
      <button >Send</button>
    </form>
  )
}


export default connect() (UserForm)