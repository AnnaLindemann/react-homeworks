// import { NavLink } from "react-router";

// export default function Nav(){
// return(
// <ul>
//     {/* <li><Link to="/">Home</Link></li>
//     <li><Link to="/about">About</Link></li>
//     <li><Link to="/contacts">Contacts</Link></li> */}
//     <li>
//         <NavLink
//           style={({ isActive }) => ({
//             color: isActive ? "red" : "blue",
//           })}
//           to="/"
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           style={({ isActive }) => ({
//             color: isActive ? "red" : "blue",
//           })}
//           to="/about"
//         >
//           About
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           style={({ isActive }) => ({
//             color: isActive ? "red" : "blue",
//           })}
//           to="/contacts"
//         >
//           Contacts
//         </NavLink>
//       </li>
//   </ul>)
  
// }
import { NavLink } from "react-router";
const menuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contacts",
    title: "Contacts",
  },
  {
    path: "/profile/512",
    title: "Profile",
  }
];
function Nav() {
  return (
    <ul>
      {menuItems.map((item, index) => {
        return (
          <li key={index + item.title}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to={item.path}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
export default Nav;