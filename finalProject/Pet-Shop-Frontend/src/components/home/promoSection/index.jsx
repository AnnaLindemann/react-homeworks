import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function PromoSection(){

return(
<section className={styles.promoSection}>
<div className={styles.promoOverlay}>
  <div className={styles.promoContent}>
    <Typography variant="h1" sx={{color: "white",  fontWeight: 700, lineHeight: 1.05, fontSize: { xs: "2.25rem", sm: "3rem", md: "4rem" }, mb: { xs: 1, sm: 2 },}}>
      Amazing Discounts
      </Typography>
    <Typography variant="h1" sx={{color: "white",  fontWeight: 700, lineHeight: 1.05, fontSize: { xs: "2.25rem", sm: "3rem", md: "4rem" }, mb: { xs: 1, sm: 2 },}}>on Pets Products!</Typography>
    <Button  component={Link} to="/sale" aria-label="Go to sale" color="primary" variant="contained"  sx={{alignSelf: "flex-start",textTransform: "none", px: { xs: 3, sm: 6 },py: { xs: 1, sm: 1.5 }, borderRadius: "12px",      
     fontSize: { xs: "1rem", sm: "1.25rem" },fontWeight: 600,boxShadow: "none", }}>Check out</Button>      
  </div>
</div>
</section>
)
}