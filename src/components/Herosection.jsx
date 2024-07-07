import heroLogo from "../assets/Images/portfolio-img.png";
import logo from "../assets/Images/oyin-logo-removebg-preview.png"
import curvedArrow from "../assets/Images/arrow.png";
import line from "../assets/Images/line1.png";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, Element} from "react-scroll";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);

   

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
      }, []);

  return (
    <div className="">
    <Element name="Hero" className="w-full h-full ">

        <img src={line} className="absolute line left-0 top-32 max-lg:hidden" alt="line"></img>
        <img src={line} className="absolute line bottom-10 right-0 max-lg:hidden" alt="line"></img>

        <div className=" flex gap-20 flex-col ">
            <nav className={`flex fixed z-50 px-24 max-sm:px-8 bg-[#001233] max-lg:px-12 w-full max-lg:pb-8 max-sm:pb-2 pb-1  animate__animated animate__fadeInDown border-b justify-between border-[#219ebc]  text-[#f1faee] ${isOpen ? "max-lg:fixed max-sm:flex-col max-sm:bg-[#001233] max-sm:h-screen max-sm:z-20 max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:pt-8 max-sm:px-8" : "max-sm:flex-col"}`}>
                <div className="max-sm:flex items-center max-sm:justify-between">
                    <div className="">
                        <Link to="Hero" smooth={true} duration={500}><img src={logo} className="w-20" alt="hero-logo" onClick={() => setIsOpen(false)}></img></Link> 
                    </div>
                    
                    <button
                    className="relative w-10 h-10 max-sm:block hidden  focus:outline-none "
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <span
                    className={`block absolute h-[3px] w-10 bg-[#219ebc] transform  transition duration-300 ease-in-out ${
                        isOpen ? "rotate-45 " : "-translate-y-2.5"
                    }`}
                    ></span>
                    <span
                    className={`block absolute bg-[#219ebc] h-[3px]  w-10  transform transition duration-300 ease-in-out ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                    ></span>
                    <span
                    className={`block absolute bg-[#219ebc] h-[3px]  w-10 transform transition duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 " : "translate-y-2.5"
                    }`}
                    ></span>
                </button>
              </div>
             
                <div className={`flex gap-12 items-center cursor-pointer max-sm:flex-col ${isOpen ? "max-sm:flex max-sm:text-3xl max-sm:text-[#219ebc] max-sm:uppercase" : "max-sm:hidden"}`}>
                    <Link to="About" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}><a href="#About">About Me</a></Link>
                    <Link to="Skills" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link to="Projects" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="Contact" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

                <div className={`flex gap-8 items-center max-sm:flex-col ${isOpen ? "max-sm:flex max-sm:pb-20" : "max-sm:hidden"}`}><button className="rounded-md border px-4 py-2 hvr-sweep-to-right text-sm border-[#219ebc] text-[#219ebc]">Hire Now</button></div>
            </nav>

            <div className="flex  px-24 pt-40 pb-16 justify-between items-center gap-8  max-lg:flex-col  max-sm:px-8 max-lg:px-12">
                <div className="flex flex-col gap-8  max-w-2xl w-full animate__animated animate__fadeInLeft animate__delay-1s ">
                    <p className="text-xl ">Hi, I'm Tella Oyinkansola</p>
                    <p className="text-[55px] max-lg:text-5xl text-[#219ebc] font-bold max-sm:text-3xl ">Front End Developer.</p>
                    <div className="md:w-11/12 lg:w-10/12  text-gray-400">
                        <p>Creative Front-End Developer specializing in modern web technologies like React.js, 
                        Tailwind CSS,Redux and TypeScript.Dedicated to delivering high-quality, interactive user interfaces.</p>
                    </div>
                 
                    <div className="flex flex-col w-72 gap-4 max-sm:pb-8 ">
                        <div className="flex gap-8 font-bold items-center ">
                            <button className="bg-white text-[#001233] rounded-md border px-4 py-3 text-sm  hvr-sweep-to-right hover:border hover:border-[#219ebc]">Get in touch</button>
                            <button className="rounded-md border px-4 py-3 text-sm border-white hvr-sweep-to-right hover:border hover:border-[#219ebc]">Explore me</button>
                        </div>
                        <div className="flex items-center justify-center animate__animated animate__wobble animate__delay-2s">
                            <img src={curvedArrow} className="w-24 line curve" alt="Hire me"/>
                        </div>
                    </div>
                   
                </div>
                <div className="flex flex-col justify-center items-center  w-3/4 h-full  animate__animated animate__fadeInRight animate__delay-1s">
                    <div className="color-overlay ">
                        <img src={heroLogo} className="w-80 my-image  rounded-md grayscale" alt="my-image"></img>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    </div>
  )
}

export default HeroSection;