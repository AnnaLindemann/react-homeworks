import { useForm } from "react-hook-form";
import styles from "./styles.module.css"

export default function DynamicForm(){
const {register,handleSubmit,watch, formState:{errors,isValid}} = useForm({mode: "onChange"})
const selectedValue = watch("selectedOption")
function onSubmit(data){
console.log(data)
}

return (
<form className={styles.formCont} onSubmit={handleSubmit(onSubmit)}>
  <select className={styles.formSelect} {...register("selectedOption")}>
    <option className={styles.formOption} value="option0">Choose your age</option>
    <option className={styles.formOption} value="option1">You are yanger as 18 y.o</option>
   <option className={styles.formOption} value="option2">You are older as 18 y.o</option>
  </select>
  {selectedValue === "option1" && <p className={styles.formPar}>You have to be 18 y.o</p> }
  {selectedValue === "option2" && (
   <div className={styles.inputCont}>
    <h2 className={styles.inputTitle}>Now you can registrate:</h2>
    <input className={styles.formSelect} {...register("email",{required: "This is requerd filed", pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Email format is not valid"}})} type="email" placeholder="Please,enter your email"  />
    {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
    <button disabled={!isValid}>Confirm</button>
    </div>
  )}
</form>


)
}