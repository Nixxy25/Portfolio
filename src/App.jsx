import HeroSection from "./components/Herosection";
import AboutMe from "./components/aboutMe";
import "./App.css"
import Skills from "./components/skills"

const App = () => {
  return (
    <div className="bg-[#512d] h-full w-full poppins-thin">
      <HeroSection />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default App