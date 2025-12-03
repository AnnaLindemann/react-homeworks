import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setUserLogin } from "../../redux/actions";
import styles from "./styles.module.css"

function LoginForm({dispatch}){
  const {register, handleSubmit, formState:{errors}} = useForm();   

  const onSubmit = (data) => {
    dispatch(setUserLogin(data.user))
  }

  return(
    <form className={styles.formCont} onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("user", {required: "Name is required"})} />
      {errors.user && <p>{errors.user.message}</p>}
      <input type="password" placeholder="Password" {...register("password",{required: "Password is required"})}/>
      {errors.password && <p>{errors.password.message}</p>}
      <button>Submit</button>
    </form>
  )



}

export default connect() (LoginForm)