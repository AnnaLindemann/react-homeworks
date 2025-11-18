import { NavLink } from "react-router";


export default function Link({path, title,className}){

  return(
  <NavLink to={path} className={className} style={({isActive}) => ({fontSize: isActive ? "1.5rem" : "1rem"})}>{title}</NavLink>);

}