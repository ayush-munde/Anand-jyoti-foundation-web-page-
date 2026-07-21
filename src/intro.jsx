import Prof from './assets/profile.jpg'
import logo from "./assets/logo.png";
import '@fontsource/abril-fatface';
import '@fontsource-variable/lora/wght.css';
export function Introd(){
  return(
  
  <div className="flex flex-col">
    {/* Hero Image */}
    <div>
      <img
        src={Prof}
        alt="Profile"
        className="w-full h-50 lg:h-screen object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-8 lg:gap-20  my-8 px-6">

      {/* Logo */}
      <div className="flex lg:px-0 text-center lg:mx-15 ">
        <img
          src={logo}
          alt="Logo"
          className="w-40 h-40 lg:w-70 lg:h-60 object-contain"
        />
      </div>

      {/* Text */}
      <div className="max-w-2xl text-center justify-center lg:text-left">
        <h1 className="text-3xl bg-gradient-to-t from-pink-800 to-pink-200 bg-clip-text text-transparent font-bold mb-4 "
        style={{ fontFamily: "Abril Fatface" }}
    >
         Welcome to Anand Jyoti Foundation
        </h1>
         <h1 className="text-md  mb-4 "
        style={{ fontFamily: "Abril Fatface" }}
    >
         Together, Let's Help Each Other.
        </h1>

        <p className="text-gray-700 font-bold text-lg text-justify leading-8"
        style={{ fontFamily: 'Lora Variable', serif: true }}>
          We are a dedicated NGO working to uplift and empower marginalized
          communities across rural Maharashtra, with a deep focus on the
          Melghat Tribal Area. Driven by a passionate group of individuals,
          we are committed to creating lasting, positive change in
          livelihood, health, and education.
        </p>
      </div>

    </div>
    <hr className="border-t border-gray-300 my-8"></hr>
  </div>
);
  
}