import "./aboutMe.css";
import { Element } from "react-scroll";


const AboutMe = () => {
  return (
    <Element name="About" className="px-24 py-16 max-sm:px-8 max-lg:px-12 flex flex-col gap-12 h-full items-center">
        <div className="text-center flex justify-center">
            <p className=" border-l-4 px-4 py-2 border-[#219ebc] bg-[#219dbc70] text-2xl" >About Me</p>
        </div>

        <div className="flex justify-between gap-10  max-lg:px-0 max-sm:flex-col">
            <div className="w-full"  data-aos="fade-up">
                <div className="pb-12 text-white text-lg flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 " fill="#219ebc"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                    <p className="">My Profile</p>
                </div>


                    <div className="flex flex-col w-full gap-4 text-gray-400 pb-8">
                        <p>Turning ideas into reality drives my passion in tech. Hi there, I’m a <span className="text-[#219ebc]">frontend engineer</span> based in Nigeria, 
                        specializing in both <span className="text-[#219ebc]">design and functionality</span>. I focus on creating user-friendly and visually appealing website interfaces, ensuring that every feature <span className="text-[#219ebc]">works 
                        smoothly</span> and enhances the overall experience.</p>
                    
                        <p><span className="text-[#219ebc]">Coding</span> has always fascinated me, from <span className="text-[#219ebc]">debugging to improving website</span> performance. 
                        I enjoy tackling problems and making sure everything <span className="text-[#219ebc]">functions perfectly.</span></p>

                        <p>Aside from coding, I’m a big fan of <span className="text-[#219ebc]">football and gaming</span>. These hobbies keep me <span className="text-[#219ebc]">engaged and 
                        inspired</span>, fueling my creativity and teamwork.</p>
                    
                        <p><span className="text-[#219ebc]">Let’s work</span> together to turn your ideas into amazing web experiences—reach out and <span className="text-[#219ebc]">let’s get started!</span></p>
                    </div>
                
            </div>
       
            <div className="w-full h-full flex flex-col"  data-aos="fade-up">

                <div className="text-white pb-12 flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="#219ebc" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                    <p>My Experience</p>
                </div>

                <div className="flex flex-col">

                <div className="border-l-2 timeline border-[#219ebc] px-6 pb-8">
                    <div className="timeline-row flex flex-col poolot px-4 py-2 rounded-md">
                        <p className="text-lg">Poolot</p>
                        <p className="pb-4 text-gray-400 text-sm">Frontend Developer</p>
                        <div className="flex gap-2 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="#219ebc" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            <p className="text-[#219ebc]">March 2024 - Present</p>
                        </div>
                    </div>
                </div>

                <div className="border-l-2 timeline border-[#219ebc] px-6 pb-8 ">
                    <div className="timeline-row flex flex-col poolot px-4 py-2 rounded-md ">
                        <p className="text-lg">Oasis Infobyte</p>
                        <p  className="pb-4 text-gray-400 text-sm">Web Developer Intern</p>
                        <div className="flex gap-2 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="#219ebc" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            <p className="text-[#219ebc]">April 2024 - June 2024</p>
                        </div>
                    </div>
                </div>

                <div className="border-l-2 timeline border-[#219ebc] px-6 pb-8">
                <div className="timeline-row flex flex-col poolot px-4 py-2 rounded-md">
                    <p className="text-lg">Coursera</p>
                    <p className="pb-4 text-gray-400 text-sm">Frontend Development Intern</p>
                    <div className="flex gap-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="#219ebc" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                        <p className="text-[#219ebc]">Aug 2023 - March 2024</p>
                    </div>
                </div>
            </div>
            </div>



       

            </div>
        </div>
    </Element>
  )
}

export default AboutMe;