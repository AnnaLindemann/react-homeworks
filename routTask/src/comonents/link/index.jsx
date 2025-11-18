import { NavLink } from "react-router";

export default function Link({path, title}){
  return(
  <NavLink style={({isActive}) => ({fontWight: isActive ? "800" : "500"})} to={path}>{title}</NavLink>)
}