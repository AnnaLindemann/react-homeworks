import { useEffect,useRef } from "react";
import styles from "./styles.module.css"
export default function ValueDisplay({value}){
const prevValueRef = useRef("");

useEffect(()=> {

prevValueRef.current = value;


},[value])


return(
  <div className={styles.valueCont}>
    <span>Current value:{value}</span>
      <span  >Previous value:{prevValueRef.current}</span>
  </div>
)

 }