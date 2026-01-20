import Footer from "../footer";
import Header from "../header";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
  return (
    <div>
    <Header/>
    <main>
      <Outlet/>
      </main>    
    <Footer/>
</div>
  )
}