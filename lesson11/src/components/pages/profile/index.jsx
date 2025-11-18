import {  useParams } from "react-router";
export default function Profile() {
  const params = useParams()
  return (
    
    <>
      <h1>Profile page</h1>
      <p>User id: {params.userId} </p>
    </>
  );
}