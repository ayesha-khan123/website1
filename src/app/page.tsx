import Footer from "./components/footer";
import Header from "./components/header";
import image from "next/image";
import Caraousal from "./components/caraousal"
import Navbar from "./components/nav";
import Shop from "./components/shop/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
       <Header/> 
       <Shop/>
      <Caraousal/>
     
      {/* <Footer/> */}

    </div>

  )
}