import Prof from './assets/profile.jpg'
import logo from "./assets/logo.png";
export function Introd(){
  return(
    <>
 
      <img src={Prof} alt="Profile" className='lg:w-screen h-50 w-full lg:h-screen object-cover'/>
     
  
    <div classNAme=" grid col-span-2 justify-center items-center text-center gap-3 my-5">
      <div>
        <img src={logo} alt="Logo" className="w-32 h-32" />
      <h1>"Anand Jyoti foundation !" </h1>
      <p>We are a dedicated NGO working to uplift and empower marginalized communities across rural Maharashtra, with a deep focus on the Melghat Tribal Area. Driven by a passionate group of individuals, we are committed to creating lasting, positive change in livelihood, health, and education. 
</p>
</div>


    </div>

  
  
    </>
  )
}