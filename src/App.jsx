import HeroSection from "./components/Herosection";
import AboutMe from "./components/aboutMe";
import "./App.css"
import 'animate.css/animate.min.css';
import 'hover.css/css/hover-min.css';
import Skills from "./components/skills"
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="bg-[#001233] h-full w-full poppins-thin">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App