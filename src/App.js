import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Whatis from "./components/Whatis";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Whatis />
      <Aboutus/>
      <Footer/>
    </div>
  )
}