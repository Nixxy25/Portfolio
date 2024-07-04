import Bootstrap from "../assets/Images/bootstrap-image.png"
import Css from "../assets/Images/css-image.png"
import Figma from "../assets/Images/figam-image.png"
import Firebase from "../assets/Images/firebase-image.png"
import Git from "../assets/Images/git-image.png"
import Html from "../assets/Images/html-image.png"
import JavaScript from "../assets/Images/javascript-image.png"
import React from "../assets/Images/react-image.png"
import Redux from "../assets/Images/redux-image.png"
import Sass from "../assets/Images/sass-image.png"
import Tailwind from "../assets/Images/tailwind-image.png"
import Skrew from "../assets/Images/skrew-1.png"

////SEO FOR WEBSITE
const Skills = () => {
  return (
    <div className="relative flex flex-col px-24 py-16 h-full max-sm:px-8 ">
        
        <img className="absolute line top-0 left-0" src={Skrew} alt="side-icon"></img>
        <img className="absolute line bottom-0 right-0" src={Skrew} alt="side-icon"></img>
        
        <div className="text-center flex  justify-center pb-16">
            <p className=" border-l-4 px-4 py-2 border-[#219ebc] bg-[#219dbc70] text-2xl">Skills & Tools</p>
        </div>
        <div className="flex gap-12 items-center pb-8  max-sm:flex-col ">
            <div className="flex flex-col justify-center items-center text-center shadow-n  gap-6 rounded-md py-8 px-4 w-full h-full">
                <div className="flex justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10" fill="#219ebc" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
                </div>

                <p className="font-bold text-xl">Website Development</p>
                <p>Creative Front-End Developer specializing in modern web technologies like React.js, 
                Tailwind CSS,Redux and TypeScript..</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center shadow-n  gap-6 rounded-md py-8 px-4 w-full h-full">
                <div className="flex justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10" fill="#219ebc"><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/></svg>
                </div>

                <p className="font-bold text-xl">Responsive Design</p>
                <p>Creative Front-End Developer specializing in modern web technologies like React.js, 
                Tailwind CSS,Redux and TypeScript.</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center shadow-n  gap-6 rounded-md py-8 px-4 w-full h-full">
                <div className="flex justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  className="w-10" fill="#219ebc"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                </div>

                <p className="font-bold text-xl">API Integration</p>
                <p>Creative Front-End Developer specializing in modern web technologies like React.js, 
                Tailwind CSS,Redux and TypeScript..</p>
            </div>
        </div>
        <div className="grid grid-cols-12 max-sm:grid-cols-4 gap-2  items-center">
            <div className="flex flex-col gap-2 items-center">
                <img src={Html} className="w-20" alt="Html-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Css} className="w-12" alt="Css-image"></img>
                <p>Css</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={JavaScript} className="w-16 max-sm:w-12" alt="Javascript-image"></img>
                <p>Javascript</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Tailwind} className="w-16 max-sm:w-12" alt="Tailwind-image"></img>
                <p>Tailwind</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Bootstrap} className="w-16 max-sm:w-12" alt="Bootstrap-image"></img>
                <p>Bootstrap</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Sass} className="w-16 max-sm:w-12" alt="Sass-image"></img>
                <p>Sass</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={React} className="w-16 max-sm:w-12" alt="React-image"></img>
                <p>React Js</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Redux} className="w-16 max-sm:w-12" alt="Redux-image"></img>
                <p>Redux</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Figma} className="w-16 max-sm:w-12" alt="Figma-image"></img>
                <p>Figma</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Git} className="w-20 max-sm:w-16" alt="Git-image"></img>
                <p>Git</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <img src={Firebase} className="w-16 max-sm:w-12" alt="Firebase-image"></img>
                <p>Firebase</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Bootstrap} className="w-16 max-sm:w-12" alt="Bootstrap-image"></img>
                <p>Framer</p>
            </div> 
        </div>
    </div>
  )
}

export default Skills;