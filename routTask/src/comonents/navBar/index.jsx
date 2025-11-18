import Link from "../link"
export default function NavBar(){
  return (
    <nav>
      <div>
        <Link path={"/"} title="Home"/>
 <Link path={"/users"} title="Users"/>
      </div>
    </nav>
  )
}