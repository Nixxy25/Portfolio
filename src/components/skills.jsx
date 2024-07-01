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
    <div className="relative flex flex-col gap-12 h-96 px-24 py-16">

        <div className="">
            <img className="absolute top-0 left-0" src={Skrew} alt="side-icon"></img>
            <img className="absolute bottom-0 right-0" src={Skrew} alt="side-icon"></img>
        </div>

        <div className="text-center text-2xl">My Skills & Tools</div>

        <div className="grid grid-cols-6 gap-4">
            <div className="flex flex-col gap-2 items-center">
                <img src={Html} className="h-28" alt="Html-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Css} className="h-28" alt="Css-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={JavaScript} className="h-28" alt="Javascript-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Tailwind} className="h-28" alt="Tailwind-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Bootstrap} className="h-28" alt="Bootstrap-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Sass} className="h-28" alt="Sass-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={React} className="h-28" alt="React-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Redux} className="h-28" alt="Redux-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Figma} className="h-28" alt="Figma-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Git} className="h-28" alt="Git-image"></img>
                <p>Html</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <img src={Firebase} className="h-28" alt="Firebase-image"></img>
                <p>Html</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
                <img src={Bootstrap} className="h-28" alt="Bootstrap-image"></img>
                <p>Html</p>
            </div> 
        </div>
    </div>
  )
}

export default Skills;