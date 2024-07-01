import heroLogo from "../assets/Images/Experienced Frontend Developer  HTML  CSS  JavaScript  React Js (2).png"
import curvedArrow from "../assets/Images/arrow.png";
import line from "../assets/Images/line1.png"
import dot from "../assets/Images/dots (1).png"

const HeroSection = () => {
  return (
    <div className="">

        <div className=""><img src={line} className="absolute left-0 top-32" alt="line"></img>
        <img src={line} className="absolute bottom-10 right-0" alt="line"></img></div>

        <div className="px-24 py-8 flex gap-20 flex-col h-screen">
            <nav className="flex items-center justify-between border-b border-white py-4">
                <div className="flex gap-2 items-center">
                    <div><img src={heroLogo} className="w-10 rounded-full" alt="hero-logo"></img></div>
                    <div>OYINIXXI</div>
                </div>

                <div className="flex gap-8 items-center">
                    <p className="hover:border-b-2 border-white">About Me</p>
                    <p>Skills</p>
                    <p>Experience</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>

                <div><button className="rounded-md border px-4 py-2 text-sm border-white">Hire Now</button></div>
            </nav>

            <div className="flex  justify-between items-center gap-8">
                <div className="flex flex-col gap-8  max-w-2xl w-full">
                    <p className="text-xl ">Hi, I'm Tella Oyinkansola</p>
                    <p className="text-5xl text-green-500 font-bold">Front End Developer.</p>
                    <div className="">
                        <p>This initial step involves a systematic and thorough exploration of.user  </p>
                        <p>the market landscape, user needs, and existing solutions.</p>
                        <p>The market landscape, user needs,</p>
                    </div>
                    <div className="flex flex-col w-72 gap-12">
                        <div className="flex gap-8 font-bold items-center ">
                            <button className="bg-white text-purple-800 rounded-md border px-4 py-3 text-sm">Get in touch</button>
                            <button className="rounded-md border px-4 py-3 text-sm border-white">Explore me</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={curvedArrow} className="w-24" alt="Hire me"/>
                        </div>
                    </div>
                   
                </div>
                <div className="relative flex justify-center h-full w-full">
                    <div className="flex w-full h-full relative max-w-sm">
                        <img className="absolute bottom-0 right-0  rounded-md w-28" src={dot} alt="hero-image"></img>
                        <img className="absolute top-0 left-0  rounded-md w-28" src={dot} alt="hero-image"></img>
                    </div>

                    <div className="absolute flex top-20">
                        <img src={heroLogo} className="w-72" alt="my-image"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;