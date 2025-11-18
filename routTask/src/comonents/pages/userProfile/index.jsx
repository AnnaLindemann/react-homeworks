import { useParams,useNavigate } from "react-router";
import { usersMas } from "../users";

export default function UserProfile(){
  const params = useParams()
  const navigate = useNavigate()
const userId = Number(params.userId)
const user = usersMas.find((userItem) => 
  userItem.id === userId
)
if(!user){
  return(<p>There is no user with this id.</p>)

} else{
  return( 
    <div>
      <h2>id: {params.userId}</h2>
      <p>User Name: {user.name}</p>
      <p>User Bio: {user.bio}</p>
      <button onClick={()=> navigate("/users")}>Back to users</button>
      </div>
  )
}
 
}