import heroLogo from "../assets/Images/me.png";
import curvedArrow from "../assets/Images/arrow.png";
import line from "../assets/Images/line1.png";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, Element} from "react-scroll";
import resume from "../assets/Tella-Oyinkansola.pdf"
import WordRotate from "../UI/wordRotate";
import { cn } from "../lib/utils";
import GridPattern from "../UI/gridPattern";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const words = ['Frontend Engineer', 'Web Developer', 'SEO Specialist'];

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
    <Element name="Hero" className="relative w-full h-full">
        <GridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
        />

        <img src={line} className="absolute line left-0 top-32 max-lg:hidden" alt="line"></img>
        <img src={line} className="absolute line bottom-10 right-0 max-lg:hidden" alt="line"></img>

        <div className=" flex gap-20 flex-col">
            <div className="pb-24">
            <nav className={`flex fixed z-50  px-24  max-sm:px-8 bg-[#001233] max-lg:px-12 w-full max-lg:pb-8 max-sm:py-4 py-6 items-center  animate__animated animate__fadeInDown border-b justify-between border-[#219ebc]  text-[#f1faee] ${isOpen ? "max-lg:fixed   max-sm:flex-col max-sm:bg-[#001233] max-sm:h-screen max-sm:z-20 max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:pt-8 max-sm:px-8" : "max-sm:flex-col"}`}>
                <div className="max-sm:flex max-sm:w-full items-center max-sm:justify-between">
                    <div className="">
                        <Link to="Hero" smooth={true} duration={500} onClick={() => setIsOpen(false)} >
                            <div className="text-[#219ebc] font-bold text-xl tracking-widest cursor-pointer ">OYINX</div>
                        </Link> 
                    </div>
                    
                    <button
                    className="relative w-10 h-10 max-sm:block hidden  focus:outline-none "
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <span
                    className={`block absolute h-[3px] w-8 bg-[#219ebc] transform  transition duration-300 ease-in-out ${
                        isOpen ? "rotate-45 " : "-translate-y-2.5"
                    }`}
                    ></span>
                    <span
                    className={`block absolute bg-[#219ebc] h-[3px]  w-8  transform transition duration-300 ease-in-out ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                    ></span>
                    <span
                    className={`block absolute bg-[#219ebc] h-[3px]  w-8 transform transition duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 " : "translate-y-2.5"
                    }`}
                    ></span>
                </button>
              </div>
             
                <div  className={`flex gap-12 items-center cursor-pointer max-sm:flex-col ${isOpen ? "max-sm:flex   max-sm:text-3xl max-sm:font-[600] max-sm:text-gary-400 max-sm:uppercase" : "max-sm:hidden"}`}>
                    <Link to="About" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}><a href="#About">About Me</a></Link>
                    <Link to="Skills" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link to="Projects" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="Contact" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

                <a href="https://t.co/yN9fccBmWr" target="_blank"  className={`flex gap-8 items-center  max-sm:flex-col ${isOpen ? "max-sm:flex max-sm:pb-20" : "max-sm:hidden"}`}><button className="rounded-md border px-4 py-2 hvr-sweep-to-right hover:border hover:border-[#219ebc] text-sm border-white   max-sm:text-xl">Hire Now</button></a>
            </nav>
            </div>

            <div className="flex  px-24  gap-8  max-lg:flex-col  max-sm:px-8 max-lg:px-12">
                <div className="flex flex-col gap-6 w-full animate__animated animate__fadeInLeft animate__delay-1s ">
                    <p className="text-xl ">Hi, I'm Tella Oyinkansola ✨</p>
                    <span className="text-[43px] max-lg:text-5xl text-[#219ebc] font-bold max-sm:text-[29px]">
                        <WordRotate words={words} />
                    </span>
                    <div className="md:w-11/12 lg:w-10/12 text-lg  text-gray-400">
                        <p>I excel in enhancing
                        web applications and websites for peak performance, efficiency, optimization, and design excellence.
                        My dedication ensures that I consistently meet and exceed expectations.</p>
                    </div>
                 
                    <div className="flex flex-col w-72  gap-4 max-sm:pb-8 ">
                        <div className="flex gap-8 font-bold items-center ">
                            <Link to="Contact"><button className="bg-white text-[#001233] rounded-md border px-4 py-3 text-sm  hvr-sweep-to-right hover:border hover:border-[#219ebc]">Get in touch</button></Link>
                            <a href={resume} target="_blank"><button className="rounded-md border px-6 py-3 text-sm border-white hvr-sweep-to-right hover:border hover:border-[#219ebc]">Resume</button></a>
                        </div>
                        <div className="flex items-center justify-center ">
                            <img src={curvedArrow} className="w-24 line curve" alt="Hire me"/>
                        </div>
                    </div>
                   
                </div>
                <div className="flex flex-col justify-center items-center max-sm:p-4 md:p-24 lg:p-0  lg:w-3/4 h-full  animate__animated animate__fadeInRight animate__delay-1s">
                    <div className="color-overlay  ">
                        <div className="image">
                            <img src={heroLogo} className="w-full   my-image  rounded-md " alt="my-image"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    </div>
  )
}

export default HeroSection;