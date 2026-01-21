import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import notFound from "../../assets/images/notFound.png";

export default function NotFound() {
  return (
    <Box sx={{ minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center", px:{ xs:2, sm:3 }, py:{ xs:4, sm:6 } }}>
      <Container maxWidth="md" sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", gap:{ xs:2, sm:2.5 } }}>
        <Box component="img" src={notFound} alt="Not found page" sx={{ width:"100%", maxWidth:{ xs:420, sm:560, md:700 }, height:"auto", mb:{ xs:1, sm:1.5 } }} />
        <Typography variant="h2" sx={{ fontWeight:700 }}>Page Not Found</Typography>
        <Typography variant="h6" sx={{ maxWidth:520, lineHeight:1.5, color:"rgba(0,0,0,0.55)" }}>
          We’re sorry, the page you requested could not be found. Please go back to the homepage.
        </Typography>
        <Button component={Link} to="/" aria-label="Go to home" variant="contained" color="primary" sx={{ textTransform:"none", px:{ xs:3, sm:6 }, py:{ xs:1, sm:1.5 }, borderRadius:"12px", fontSize:{ xs:"1rem", sm:"1.25rem" }, fontWeight:600, boxShadow:"none", mt:{ xs:1, sm:1.5 } }}>
          Go Home
        </Button>
      </Container>
    </Box>
  );
}
