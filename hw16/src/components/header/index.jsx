import { AppBar,Toolbar,Typography } from "@mui/material";

function Header(){
   return(
   <AppBar position="sticky" sx={{
        top: 0,
       background:
          "linear-gradient(180deg, rgba(219, 234, 254, 0.95), rgba(191, 219, 254, 0.82))",
        color: "text.primary",
        boxShadow: "0 10px 30px rgba(2, 132, 199, 0.18)",
        borderBottom: "1px solid rgba(2, 132, 199, 0.18)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",}} >
  <Toolbar sx={{ minHeight: 72 }}>
    <Typography variant='h4' 
            sx={{
            fontWeight: 900,
            letterSpacing: -0.6,
            background: "linear-gradient(90deg, #1D4ED8, #0284C7, #0F766E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Dialog App</Typography>
  </Toolbar>
      </AppBar>
      )
}
export default Header