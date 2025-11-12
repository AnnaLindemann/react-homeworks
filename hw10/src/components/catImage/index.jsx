import axios from "axios";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import styles from "./styles.module.css"

export default function CatImage(){
const [isLoading,setIsLoading] = useState(true)
const [error,setError] = useState(null)
const [imageUrl,setImageUrl] = useState(null)

function handleClick(){
  if(isLoading){
    return 
  } else {
    fetchImage()
  }
}

async function fetchImage(){
  setError(null)
  setIsLoading(true)
  try {const recivedImg = await axios.get("https://api.thecatapi.com/v1/images/search")
    
    if(Array.isArray(recivedImg.data) && recivedImg.data.length > 0){
      const fetchedCat = recivedImg.data[0].url; setImageUrl(fetchedCat)

    } else {
      setError("Could not load the image.")
    }
} catch(error){
  const message = (error.message && error.message)|| "Oops,something went wrong. Try again!"
  setError(message)
}
finally{setIsLoading(false)}
}

useEffect(() => {
fetchImage()

},[])

return (
<div className={styles.catCont}>
  <h2 className={styles.catTitle}>Your cat image:</h2>
  {error && (<p className={styles.catError}>{error}</p>)}
  
    {isLoading ?  (<PacmanLoader loading={isLoading} />) : imageUrl ? (<img className={styles.catCImgItem} src={imageUrl} alt="Cat image" />) : (<p className={styles.catNoImg}>No image available</p>)}  
  <button className={styles.catBtn} type="button" onClick={handleClick} disabled={isLoading}>{isLoading ? "Loading ..." : "Get a new image"}</button>
</div>

)
}