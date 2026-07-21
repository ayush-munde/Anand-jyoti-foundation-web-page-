import padhai from "./assets/padhai.jpg";
import sehat from "./assets/sehat.jpg";
import livhood from "./assets/livhood.jpg";
import {LearnMore} from "./contact.jsx";
import {useState} from "react";
import { FaBookOpen } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";

export function Prog(){
const [selectedCard, setSelectedCard] = useState(null);

return(
<div className="flex flex-col items-center px-6 py-12">

<h1 className="text-4xl font-bold text-center mb-4">
 Programs That Transform Lives
 </h1>
 <p className="text-center text-gray-600 max-w-2xl">
Each initiative is designed with measurable outcomes, community  ownership, and long-term sustainability.
</p>

 <div className="flex flex-col lg:flex-row gap-8 mt-10">

 {/* Left Column */}
<div className="flex flex-col gap-8">

      {/* Project Padhai */}
      <div className="w-80 rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
 <img
 src={padhai}
 alt="Project Padhai"
className="h-48 w-full object-cover"
 />

        <div className="p-5">
          <h2 className="text-xl font-semibold mb-2">
            📚 Project Padhai
          </h2>

          <p className="text-gray-600 text-sm">
            We are dedicated to providing rural and tribal children with exceptional educational resources. Project Padhai goes beyond the standard curriculum
             by implementing cutting-edge, skill-based learning. 


          </p>
        
          <button className="mt-4 text-pink-600 font-semibold hover:underline" onClick={() => setSelectedCard("padhai")}>
            Learn More →
          </button>
           <div className="relative w-80">
             {selectedCard === "padhai" && (
        <div className="absolute lg:left-full p-3 lg:ml-6 top-0 lg:w-96 bg-white shadow-xl rounded-xl lg:p-5 z-20">
            <LearnMore selectedCard={selectedCard}  icon={<FaBookOpen />} onClose={() => setSelectedCard(null)}/>
        </div>
             )}
        </div>
  
        </div>
      </div>

      {/* Project Sehat */}
      <div className="w-80 rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <img
          src={sehat}
          alt="Project Sehat"
          className="h-48 w-full object-cover"
        />

        <div className="p-5">
          <h2 className="text-xl font-semibold mb-2">
            ❤️ Project Sehat
          </h2>

          <p className="text-gray-600 text-sm">
            Signifying health, Project Sehat addresses the critical medical needs of rural and tribal populations. 
          </p>

          <button className="mt-4 text-pink-600 font-semibold hover:underline" onClick={() => setSelectedCard("sehat")}>
            Learn More →
          </button>
           <div className="relative w-80">
             {selectedCard === "sehat" && (
        <div className="absolute lg:left-full lg:ml-6 top-0 w-96 bg-white shadow-xl rounded-xl lg:p-5 z-20">
            <LearnMore selectedCard={selectedCard}  icon={<MdHealthAndSafety />} onClose={() => setSelectedCard(null)}/>
        </div>
    )}
    </div>
        </div>
      </div>

    </div>

    {/* Right Column */}
    <div className="w-80 lg:h-[400px] self-center rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={livhood}
        alt="Project Jivika"
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">
          🌱 Project Jivika
        </h2>

        <p className="text-gray-600 text-sm">
          Project Jivika is our commitment to economic empowerment. 

        </p>

        <button className="mt-4 text-pink-600 font-semibold hover:underline" onClick={() => setSelectedCard("livelihood")}>
          Learn More →
        </button>
           {selectedCard === "livelihood" && (
        <div className="absolute lg:left-full lg:ml-6 top-0 w-96 bg-white shadow-xl rounded-xl lg:p-5 z-20">
            <LearnMore selectedCard={selectedCard} icon={<RiPlantFill />}
              onClose={() => setSelectedCard(null)}/>
        </div>
    )}
      </div>

    </div>

 </div>

</div>
)
} 