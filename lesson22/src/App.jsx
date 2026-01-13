import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './redux/slices/userSlice'
import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch()
  const {users,status, error} = useSelector((state) => state.user)
 
  function handleClick() {
    dispatch(getUsers())
  }

  useEffect(()=> {
    dispatch(getUsers())
  },[dispatch]);

if(status === "loading"){
  return <h2>Loading...</h2>
} 

if(status === "failed"){
  return <h2>Error:{error}</h2>
}


  return (
    <>
      <button onClick={handleClick}>fetchUsers</button>
      {status === "succeeded" && (
        users.map((user) => {
          return <div key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.website}</p>
            <hr/>
          </div>
        })
      )}
    </>
  )
}
export default App