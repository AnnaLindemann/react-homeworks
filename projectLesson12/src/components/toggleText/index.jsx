import { useState,useRef } from "react";
import styles from "./styles.module.css"

export default function ToggleText(){
  const paragrphTextRef = useRef(null);
  const [animationInterval,setAnimationInterval] = useState(null);
  const [toggle,setToggle] = useState(false)

function handleToggleBtn(){
  const usedParagraph = paragrphTextRef.current;
  if(!usedParagraph) return

  const duration = animationInterval ?? 500
  usedParagraph.style.transformOrigin = "center center";
  // usedParagraph.style.display = "inline-block";

  if(toggle){
     setToggle(false)
  usedParagraph.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    usedParagraph.style.opacity = "0";
    usedParagraph.style.transform = "scale(0)";
    
  } else{
   
   setToggle(true)
   usedParagraph.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    usedParagraph.style.opacity = "1";
    usedParagraph.style.transform = "scale(1)";
  }
}

function getAnimationInterval(e){
const animationTime = e.target.value;
const newAnimationTime = Number(animationTime)
if(!Number.isNaN(newAnimationTime) && newAnimationTime >0){
setAnimationInterval(newAnimationTime)}

}
  return(
    <form className={styles.formCont} onSubmit={(e) => e.preventDefault()}>
<input onChange={getAnimationInterval} type="text" placeholder="Insert the animation time." />
<p ref={paragrphTextRef}>Here you can see some text.</p>
<button onClick={handleToggleBtn} type="submit">Click to open/close the text.</button>
    </form>
  )
}