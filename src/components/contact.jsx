import { Element } from "react-scroll";

const Contact = () => {
  return (
    <div>
    <Element name="Contact" className="h-full w-full px-24 pb-6 pt-16 flex flex-col gap-12 max-sm:px-6 max-lg:px-12">
        <div className="text-center flex justify-center pb-10" data-aos="fade-up">
            <p className=" border-l-4 px-4 py-2 border-[#219ebc] bg-[#219dbc70] text-2xl">Contact Me</p>
        </div>

            <div className="flex justify-center pb-10 ">
                <div className="flex flex-col justify-center  max-sm:w-full  w-1/2 max-lg:w-10/12 gap-12" data-aos="fade-up">
                    <p className="text-center text-5xl max-sm:text-3xl font-bold text-white" >Get In Touch</p>
                    <p className="text-lg text-gray-400 text-center">
                    I’m open to offers and eager to collaborate or do you want to say Hello, Send me an <a className="text-[#219ebc] hover:underline" href="mailto:tellaoyinkansola25@gmail.com">Email.</a></p>
                    <a href="https://calendly.com/tellaoyinkansola25/30min" target="_blank" className="flex justify-center" ><button className="hvr-sweep-to-right rounded-md border-2 font-bold text-[#219ebc] py-4 px-3 border-[#219ebc]">Book a Free Call</button></a>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2" >
                <div className="flex gap-12 max-sm:gap-8">
                    <a href="https://github.com/Nixxy25" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="w-7 max-sm:w-5 hvr-hang" fill="#219ebc" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                    <a href="mailto:tellaoyinkansola25@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 max-sm:w-5 hvr-hang" fill="#219ebc"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg></a>
                    <a href="https://x.com/oyinixxicodes?s=21&t=9RMEjumkYevInwmRAP0KTg" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="w-7 max-sm:w-5 hvr-hang" fill="#219ebc" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                    <a href="https://www.linkedin.com/in/tella-oyinkansola" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="w-7 max-sm:w-5 hvr-hang" fill="#219ebc" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>
                    <a href="https://www.facebook.com/Oyinixxi?mibextid=JRoKGi" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="w-7 max-sm:w-5 hvr-hang" fill="#219ebc" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
                </div>
                <div className="flex text-sm pt-4 text-gray-400 hover:text-[#219ebc]">All Rights Reserved | Tella Oyinkansola 2024</div>
            </div>
        </Element>
    </div>
  )
}

export default Contact;