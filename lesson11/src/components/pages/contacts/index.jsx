import goHome from "../../../assets/logoPNG.png"
import { useNavigate } from "react-router"

export default function Contacts(){
   const navigate = useNavigate()
  return(<><img src={goHome} alt="go home" onClick={() => navigate("/")} />
  <h1>Contacts Page</h1></>)
}