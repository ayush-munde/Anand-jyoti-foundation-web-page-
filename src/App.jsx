import {Header} from "./header"
import { Hamburger } from "./mobilenavbar";
import { Introd } from "./intro.jsx";
import {Prog} from "./prog.jsx";
import SdgCommitment from "./sdg.jsx";
import Journey from "./journey.jsx";
import  LeadershipBoard from "./mentors.jsx";
import {Identity} from "./identity.jsx";
import {Footer} from "./footer.jsx";
function App() {
  return (
    <div className="bg-[#FDF6ED] ">
    <Header />
    <Introd />
   <Prog/> 
    <SdgCommitment />
     <Identity />
    <Journey/>
    <LeadershipBoard />
    <Footer/>
     </div >
     
  );
}

export default App;