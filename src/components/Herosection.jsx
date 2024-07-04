import heroLogo from "../assets/Images/portfolio-img.png";
import curvedArrow from "../assets/Images/arrow.png";
import line from "../assets/Images/line1.png"


const HeroSection = () => {
  return (
    <div className="px-24 pb-16 pt-4 w-full h-full max-sm:px-8">

         <img src={line} className="absolute line left-0 top-32" alt="line"></img>
        <img src={line} className="absolute line bottom-10 right-0" alt="line"></img>

        <div className=" flex gap-20 flex-col">
            <nav className="flex items-center justify-between border-b  border-[#219ebc] py-4 text-[#f1faee]">
                <div className="flex gap-2 items-center">
                    <div><img src={heroLogo} className="w-10 rounded-full" alt="hero-logo"></img></div>
                    <div className="text-[#219ebc] font-bold" >OYINIXXI</div>
                </div>

                <div className="flex gap-8 items-center">
                    <p className="hover:border-b-2 border-white">About Me</p>
                    <p>Skills</p>
                    <p>Experience</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>

                <div><button className="rounded-md border px-4 py-2 text-sm border-[#219ebc] text-[#219ebc]">Hire Now</button></div>
            </nav>

            <div className="flex  justify-between items-center gap-8 max-sm:flex-col">
                <div className="flex flex-col gap-8  max-w-2xl w-full ">
                    <p className="text-xl ">Hi, I'm Tella Oyinkansola</p>
                    <p className="text-5xl text-[#219ebc] font-bold">Front End Developer.</p>
                    <div className="lg:w-3/4 text-gray-400">
                        <p>Creative Front-End Developer specializing in modern web technologies like React.js, 
                        Tailwind CSS,Redux and TypeScript.Dedicated to delivering high-quality, interactive user interfaces.</p>
                    </div>
                 
                    <div className="flex flex-col w-72 gap-4">
                        <div className="flex gap-8 font-bold items-center ">
                            <button className="bg-white text-[#001233] rounded-md border px-4 py-3 text-sm">Get in touch</button>
                            <button className="rounded-md border px-4 py-3 text-sm border-white">Explore me</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={curvedArrow} className="w-24 line curve" alt="Hire me"/>
                        </div>
                    </div>
                   
                </div>
                <div className="flex flex-col justify-center items-center w-3/4 h-full">
                    <div className="color-overlay ">
                        <img src={heroLogo} className="w-80 my-image box-shadow rounded-md grayscale" alt="my-image"></img>
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;