import Image from "next/image";
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import NewNav from './components/NewNav';
export default function Home() {
  return (
    <>
    <About/>
    <Projects/>
    
    <NewNav />

    </>

  );
}
