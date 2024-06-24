import HeroSection from "./components/Herosection";
import AboutMe from "./components/aboutMe";
import "./App.css"

const App = () => {
  return (
    <div className="bg-[#512dcd] h-full w-screen poppins-thin">
      <HeroSection />
      <AboutMe />
    </div>
  )
}

export default App