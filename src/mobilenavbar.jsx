import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export function Hamburger({ isopen }) {
  const [contact, setContact] = useState(false);
  useEffect(() => {
    if (!isopen) {
      setContact(false);
    }
  }, [isopen]);



  return (
    <div className={`fixed top-14 left-0
  w-30
  h-80 rounded-r-xl
  bg-[#fcf4e8]
  border-r border-gray-300
  px-5 py-6
  transform
  transition-transform duration-300 ease-in-out
  ${isopen ? "translate-x-0" : "-translate-x-full"} md:hidden z-50`}>
    
      <ul className="flex flex-col my-0 gap-4 text-sm">
        <li className="cursor-pointer flex gap-2 items-center hover:text-orange-500"><IoHome className="slef-center" />Home</li>
        <li className="cursor-pointer flex gap-2 items-center hover:text-orange-500"><FaInfo className="slef-center" />About</li>
        <li className="cursor-pointer flex  gap-2 items-center hover:text-orange-500"><BsFillCalendarEventFill className="self-center" />Programs</li>
        <li className="cursor-pointer flex  gap-2 items-center hover:text-orange-500"><FaRegNewspaper className="self-center" />Impact</li>
        <li className="cursor-pointer flex  gap-2 items-center hover:text-orange-500"><GrGallery className="self-center" />Gallery</li>
        <li className="cursor-pointer flex  gap-2 items-center hover:text-orange-500"><AiOutlineTeam className="self-center" />Team</li>
        <li className="cursor-pointer  flex  gap-2 items-center hover:text-orange-500"><FaUser className="self-center " /><button onClick={() => setContact(!contact)} >contact </button>
        </li>
      </ul>
      <div className={`h-20 mt-5 text-sm border  hover:border-blue-300 font-medium ${contact ? "max-h-40 opacity-100 mt-5" : " opacity-0 "}   transition-opacity ease-in-out   w-30 px-2 py-0.5 bg-[#fcf7f0] border-2 rounded-xl border-gray-300/20  items-center`}>
        <FaLongArrowAltLeft onClick={() => setContact(false)} />
        <div>
          <div className="flex flex-wrap "><FaPhoneVolume className="self-center text-sm hover:text-pink-500 cursor-pointer transition-colors duration-300" />
            &nbsp;&nbsp;8275440011</div>
            <div className="flex justify-center  gap-1 my-2">
          <a
            href="mailto:contact@anandjyoti.org"
          
          >

            <IoMdMail />
          </a>
        <a><FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-300" /></a>
                                  <a><FaFacebook  className="hover:text-pink-500  cursor-pointer transition-colors duration-300"/></a>
                                  <a><FaYoutube className="hover:text-pink-500  cursor-pointer transition-colors duration-300"/></a>
                                   <a><FaLinkedin className="hover:text-pink-500  cursor-pointer transition-colors duration-300"/></a>
                                   <a href="https://twitter.com/AnandJyotiNGO?t=SM71E35doql_teO5VFnTdA&s=09"><FaTwitter className="hover:text-pink-500  cursor-pointer transition-colors duration-300" /></a>
      </div>
    </div>
    </div>
    </div>
  )
}