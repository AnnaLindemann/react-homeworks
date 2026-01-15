export default function UserList({users}){
  return(
    <div>
      {users.map((user) => (
        <ul>
          <li key={user.id}>{user.name}</li></ul>
        
      ))}
    </div>
  )
}