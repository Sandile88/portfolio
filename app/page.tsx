import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}
