import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { MdCallMade } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import {detail} from "./detail.js";
export function Contact({contact}){
  return(
    <>
     <div className={`absolute justify-center flex flex-col top-20  md:right-45 w-45 font-medium border-3 transition-all ease-in-out 
       duration-300 delay-150 hover:border-blue-500 px-3 py-1 bg-[#fcf7f0]  rounded-xl border-gray-300/20  items-center ${contact ? 'opacity-100' : 'opacity-0'}  ${contact ? 'slide-down' : ''} down-up transition-opacity duration-300`}>
                <div className="flex "><FaPhoneVolume  className="self-center hover:text-pink-500 cursor-pointer transition-colors duration-300 text-sm" />
                            &nbsp;&nbsp; :<h1 className="cursor-text">8275440011</h1> </div>
                            <div className="flex justify-center  gap-3  my-2">
                          <a
                            href="mailto:contact@anandjyoti.org"
                          
                          >
                
                            <IoMdMail className="hover:text-pink-500 cursor-pointer transition-colors duration-300"/>
                          </a>
                          <a href="https://instagram.com/anandjyotifoundation?igshid=ZDdkNTZiNTM="><FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-300" /></a>
                          <a  href="https://www.facebook.com/profile.php?id=100089552708483&mibextid=ZbWKwL"><FaFacebook  className="hover:text-pink-500  cursor-pointer transition-colors duration-300"/></a>
                          <a href="https://youtube.com/@AnandJyotiFoundation" ><FaYoutube className="hover:text-pink-500  cursor-pointer transition-colors duration-300"/></a>
                           <a href="https://www.linkedin.com/in/anandjyotifoundation"><FaLinkedin className="hover:text-pink-500  cursor-pointer transition-colors duration-300"/></a>
                           <a href="https://twitter.com/AnandJyotiNGO?t=SM71E35doql_teO5VFnTdA&s=09"><FaTwitter className="hover:text-pink-500  cursor-pointer transition-colors duration-300" /></a>
                        </div>
             </div>

    </>
  )
}

export function LearnMore({ selectedCard, onClose ,icon}) {
  if (!selectedCard) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center  justify-center">
      <div className="bg-white p-3 lg:p-6 rounded-xl justify-center w-[300px] lg:w-[500px] relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3"
        >
          ✖
        </button>


        <h2 className="text-xl flex  justify-center gap-3  font-bold "><a className="self-center">{icon }</a>{detail[selectedCard].title}</h2>

        <ul className="list-disc list-inside mt-4 text-gray-700">
          {detail[selectedCard].points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}