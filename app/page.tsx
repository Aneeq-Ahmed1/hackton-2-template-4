import Image from "next/image";
import Headingbar from "./components/Headingbar";
import Nav from "./components/Nav";
import Promotional from "./components/Promotional";
import Postcart from "./components/Postcart";
import Unique from "./components/Unique";
import Trending from "./components/Trending";
import Footer from "./components/Footer";







export default function Home() {
  return (

    <div >

    <Headingbar />
    <Nav />
    <Promotional />
    <Postcart />
    <Unique />
    <Trending />
    <Footer />
    
   
 
  </div>

  );
}