import { NavLink } from "react-router";

export default function Link({path,title,className}){
  return(
    <NavLink to={path} className={className} 
    style={({isActive}) => ({fontWeight: isActive ? "900" : "400"})}>{title}</NavLink>
  )
}