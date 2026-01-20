import { AppBar, Toolbar, Box, Stack, Button, IconButton, Drawer, List, ListItemButton,Typography, useTheme } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../assets/icons/logo.svg"
import bagCart from "../../../assets/icons/bagCart.svg"
import { NavLink,Link } from "react-router-dom"
import { useState } from "react"
import {useMediaQuery} from "@mui/material"

export default function Header(){

  const NAV_ITEMS = [
    {label: "Main Page", to:"/"},
    {label: "Categories", to: "/categories"},
    {label: "All products", to:"/products"},
    {label: "All sales", to:"/sale"},
  ]
const [drawerOpen,setDrawerOpen] = useState(false);
const theme = useTheme();
const openDrawer = () => setDrawerOpen(true);
const closeDrawer = () => setDrawerOpen(false);
const isMobile = useMediaQuery(theme.breakpoints.down("md"))  
  return(
    <AppBar position="static" elevation={0} sx={{bgcolor: "white", color:"black", }}>
     <Toolbar sx={{px: {xs: 2, md: 5}, display: "flex", alignItems: "center", gap: 2}}>
     <Box sx={{display: "flex", alignItems: "center", gap:1}}>
      {isMobile && (
        <IconButton aria-label="Open menu" onClick={openDrawer} sx={{border: "1px solid", borderColor: "divider", borderRadius: 2}}>
          <MenuIcon/>
          </IconButton>
      )}
      <IconButton component={Link} to="/" aria-label="Go to home" sx={{width: 70, height:70, bgcolor: "primary.main", "&:hover": {bgcolor:"primary.main"}, m: 2}}>
      <Box component="img" src={Logo} alt="Pet Shop Logo" sx={{width: 34, height: 34}}/>
        
        </IconButton>
      </Box>
      <Box sx={{flex: 1, display: "flex", justifyContent: "center"}}>
        {!isMobile && (
      <Stack direction="row" spacing={4} sx={{alignItems: "center"}}>
      {NAV_ITEMS.map((item)=> (
      <Button key={item.to} component={NavLink} to={item.to} end={item.to === "/"} sx={{fontSize: theme.typography.subtitle1.fontSize, color: "text.secondary", "&:hover": {bgcolor: "transparent", color: "text.primary"}, "&.active": {color: "text.primary"} }}>
        {item.label}
      </Button>
    ))}
      </Stack>)}
      </Box>
      <Box sx={{display: "flex", alignItems:"center"}}>
        <IconButton component={Link} to="/cart" aria-label="Go to cart" sx={{width:48, height:48}}>
        <Box component="img" src={bagCart} alt="Cart" sx={{width:38, height:38}}/>
        </IconButton>
      </Box>
      {/*mobile*/}
      <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
       <Box sx={{width:280, p:2}}>
        <Typography variant="subtitle1" sx={{mb:1, fontWeight: 600}}>Menu</Typography>
     <List sx={{p:0}}>
      {NAV_ITEMS.map((item) => (
        <ListItemButton key={item.to} component={NavLink} to={item.to} end={item.to === "/"} onClick={closeDrawer} sx={{borderRadius: 2, "&.active": {bgcolor: "action.hover"}}}>
         {item.label}
        </ListItemButton>
      ))}
     </List>
     </Box>
     </Drawer>
     </Toolbar>
    </AppBar>
  )
}