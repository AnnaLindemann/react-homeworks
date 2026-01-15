import { useCallback, useState,useMemo } from 'react';
import './App.css'
import UserList from './components/usersList'

const userList = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Max" },
  { id: 3, name: "Olga" },
  { id: 4, name: "Leon" },
  { id: 5, name: "Anastasia" },
  { id: 6, name: "Sergey" },
  { id: 7, name: "Mila" },
];


function App() {
const [filter,setFilter] = useState("")

const handleOnchange = (e) => setFilter(e.target.value)

const  filterUsers = useCallback((filterText, users) => {
  const normalizedText = filterText.trim().toLowerCase();
  if(!normalizedText) return users;
  return users.filter((user) => {
    const normalizedName = user.name.toLowerCase();
    return normalizedName.includes(normalizedText); 
  }); 
   },[]);


const filtred = useMemo(() => {
  return filterUsers(filter,userList)
},[filter,filterUsers])


  return (
    <div className='mainCont'>
      <input type="text" value={filter} onChange={handleOnchange} placeholder="Search the user"/>
     <UserList users={filtred}/>
    </div>
  )
}

export default App
