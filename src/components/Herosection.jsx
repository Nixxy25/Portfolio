import heroLogo from "../assets/Images/Experienced Frontend Developer  HTML  CSS  JavaScript  React Js (2).png"

const HeroSection = () => {
  return (
    <div>
        <div className="px-24 py-8 flex gap-20 flex-col">
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

            <div className="flex justify-between ">
                <div className="flex flex-col gap-8">
                    <p className="text-xl ">Hi, I'm Oyinkansola</p>
                    <p className="text-3xl text-green-500 font-bold">Front End Developer</p>
                    <div className="text-lg">
                        <p>This initial step involves a systematic and thorough exploration of  </p>
                        <p>the market landscape, user needs, and existing solutions.</p>
                        <p>The market landscape, user needs,</p>
                    </div>
                    <div className="flex gap-4 font-bold">
                        <button className="bg-white text-purple-800 rounded-md border px-4 py-2 text-sm">Get in touch</button>
                        <button className="rounded-md border px-4 py-2 text-sm border-white">Explore me</button>
                    </div>
                </div>

                <div className="">
                    <img className="w-3/4  box-shadow" src={heroLogo} alt="hero-image"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;