import logo from "./assets/logo.png";
import { FaHeart } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Hamburger } from "./mobilenavbar";
import { IoClose } from "react-icons/io5";
import {Contact} from "./contact";
export function Header() {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <>
      <header className="  fixed top-0 w-full shadow-sm  z-50 bg-[#fcf7f0]  border-b-3 md:border-b-5 border-pink-600">
        <div className="max-w-7xl mx-auto flex   justify-between items-center text-sm  h-12 md:h-20  px-3 md:px-6">
          <div className="flex md:hidden items-center  gap-3" >
            {/* mobile view  */}
            <div className="md:hidden  self-center "> {menu ? <IoClose onClick={() => setMenu(false)} className=" text-xl font-bold self-center" /> : <RxHamburgerMenu onClick={() => setMenu(true)}  className=" text-xl font-bold self-center" />}</div>
            {/* Logo */}
            <img  src={logo} alt="NGO Logo" className="md:h-18 h-9 self-center w-auto" />


          </div>
          {/* Logo */}
          <img src={logo} alt="NGO Logo" className="hidden md:block h-14  md:self-center md:w-auto" />
          {/* Navigation */}
          <ul className="hidden md:flex  my-0 gap-4  lg:gap-8 text-sm">
            <li className="cursor-pointer hover:text-orange-500">Home</li>
            <li className="cursor-pointer hover:text-orange-500">About</li>
            <li className="cursor-pointer hover:text-orange-500">Programs</li>
            <li className="cursor-pointer hover:text-orange-500">Impact</li>
            <li className="cursor-pointer hover:text-orange-500">Gallery</li>
            <li className="cursor-pointer hover:text-orange-500">Team</li>
          </ul>
          <div className="flex justify-between md:gap-3 lg:gap-8 ">
        
            <button onClick={()=>setContact(!contact)} className="hidden md:border md:group  md:border-black md:text-sm md:hover:shadow-[0_2px_10px_rgba(160,155,255,0.9)] md:border-2 md:border-blue-600/70 md:bg-white md:flex md:justify-center md:gap-2 lg:px-5 lg:py-1 md:px-3 md:py-0.5 md:rounded-2xl md:hover:scale-105 md:font-medium  md:text-blue-600/70   md:transition md:duration-300"><IoMail className=" group-hover:animate-pulse group-hover:scale-105 self-center text-blue-600/70 text-lg" />
              Contact 
            </button>
            <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSeuU_fXVbjKiYKyZgdMz1blOh5KIsPdGXUqJ0rv7nWjQ4gpYg/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
>
           
         
            <button
              className="group flex  gap-1 md:gap-2 rounded-full 
             bg-gradient-to-r from-pink-500 to-rose-500
            px-2 py-1 font-medium text-xs md:px-3 lg:px-5 md:py-1.5 md:text-sm md:font-semibold text-white
             shadow-sm shadow-pink-500/30
             transition-all duration-300
             hover:scale-90 hover:shadow-lg hover:shadow-pink-500/40
             active:scale-95 border-2 border-white"
            >
              <FaHeart className="text-white transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse" />
              <span>Donate Now</span>
            </button>
            </a>
          </div>
            
        </div>
        <Contact  contact={contact} />
      </header>
        
      <Hamburger isopen={menu}  />
     
    </>

  );
}
