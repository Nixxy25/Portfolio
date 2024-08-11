import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link, Element} from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  // Function to toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 'auto',  }}
      
      role="presentation">
      <Element>
        <div   className="flex flex-col  justify-center gap-12 items-center text-white cursor-pointer flex-col text-2xl font-[600] uppercase">
            <Link to="About" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={toggleDrawer(false)} ><a href="#About">About Me</a></Link>
            <Link to="Skills" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={toggleDrawer(false)} >Skills</Link>
            <Link to="Projects" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={toggleDrawer(false)} >Projects</Link>
            <Link to="Contact" smooth={true} duration={500} className="hvr-grow hover:text-[#219ebc]" onClick={toggleDrawer(false)} >Contact</Link>

            <a href="https://t.co/yN9fccBmWr" target="_blank"  className="flex gap-8 items-center  flex-col">
                <button className="rounded-md border px-4 py-2 hvr-sweep-to-right hover:border hover:border-[#219ebc] text-sm border-white text-lg">Hire Now
                </button>   
            </a>
        </div>
      </Element>
    </Box>
  );

  return (
    <div>
        <button className="relative w-10 h-10 max-sm:block hidden  focus:outline-none "onClick={() => setOpen(!open)}>
            <span
            className={`block absolute h-[3px] w-8 bg-[#219ebc] transform  transition duration-300 ease-in-out ${
                open ? "rotate-45 " : "-translate-y-2.5"
            }`}
            ></span>
            <span
            className={`block absolute bg-[#219ebc] h-[3px]  w-8  transform transition duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
            }`}
            ></span>
            <span
            className={`block absolute bg-[#219ebc] h-[3px]  w-8 transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 " : "translate-y-2.5"
            }`}
            ></span>
        </button>
      <SwipeableDrawer
        anchor="left"
       
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
            '.MuiDrawer-paper': {
              marginTop: '74px',  
              height: '100vh',
              backgroundColor: '#001233',
              width:'70%',
              display:'flex',
              justifyContent: 'center',
              '@media (min-width: 680px)':  { display: 'none'},
        
              
            },
          }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
