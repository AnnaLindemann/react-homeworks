export default function Post({onDelete, id, title,text,avatar}){

  return(
    <div>
   <div><img src={avatar} alt="Avatar" />
   <h4>User Logo</h4>
   </div>
   <div>
<h3>{title}</h3>
<p>{text}</p>
   </div>
   <div>
    <h3>{id}</h3>
    <button onClick={onDelete}>Delete</button>
   </div>
    </div>
  )


}