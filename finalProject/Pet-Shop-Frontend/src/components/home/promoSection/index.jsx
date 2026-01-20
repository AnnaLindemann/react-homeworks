import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function PromoSection(){

return(
<section className={styles.promoSection}>
<div className={styles.promoOverlay}>
  <div className={styles.promoContent}>
    <Typography variant="h1" sx={{color: "white"}}>Amazing Discounts</Typography>
    <Typography variant="h1" sx={{color: "white"}}>on Pets Products!</Typography>
    <Button  component={Link} to="/sale" aria-label="Go to sale" color="primary" variant="contained"  sx={{alignSelf: "flex-start",textTransform: "none", px: 6,py: 1.5, borderRadius: "12px",      
    fontSize: "1.25rem",fontWeight: 600,boxShadow: "none", }}>Check out</Button>      
  </div>
</div>
</section>
)
}