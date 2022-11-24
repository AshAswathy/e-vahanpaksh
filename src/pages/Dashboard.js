import { Link } from "react-router-dom";
import EVCard from "../components/EVCard";
import Navbar from "../components/Navbar";
import { EVdata } from "../ev_data.js";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stats1 from "../components/Stats1";
import { Stats2 } from "../components/Stats2";
import Services from "../components/Services";
export default function Dashboard(){
    return(
        <div className="bg-stone-50">
            <Navbar/>
            <div className=" ">
            <div className="">
            <div className="w-full h-42 mx-auto border-4 border-green-600">
              <Carousel className="" showThumbs={false}>
                <div>
                    <img src="assets/c4.jpg" />
                    
                </div>
                <div>
                    <img src="assets/c5.jpg" />
                    
                </div>
                <div>
                    <img src="assets/c1.jpg" />
                </div>
                <div>
                    <img src="assets/c2.jpg" />
                </div>
                <div>
                    <img src="assets/c3.jpg" />
                </div>
                
            </Carousel>
           
            </div>
            
           
      <div className="flex flex-col items-center">
        <Services/>
      {/* <Link
                    to="/compare-chart"
                    aria-label="dashboard"
        class="shadow-xl mb-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green-500 hover:bg-green-700 text-white md:text-lg text-base font-bold md:py-4 md:px-10 mx-auto py-4 px-14  rounded-full">
     
            EV Map
            </Link> */}
   
      </div>

      <div className="flex md:flex-row flex-col md:mt-70 mt-5">
            <div className="md:w-1/2 md:p-4 mx-3">
              <div className="md:text-xl text-sm font-semibold text-center mb-3 italic">Comparison of miles per year between gas and electric vehicles</div>
              <Stats1/>
            </div>
            <div className="md:w-1/2 md:p-4 -my-2 mx-3">
            <div className="md:text-xl text-sm font-semibold text-center md:mb-3 italic">Comparison of electric and hybrid-electric vehicles for the past 7 years</div>
              <Stats2/>
            </div>
            </div>
     
     <div className="flex justify-center">
 <Link
                    to="/other-services"
                    aria-label="dashboard"
        class="shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-10 -mt-3 bg-green-500 hover:bg-green-700 text-white md:text-lg text-base font-bold md:py-4 md:px-10 mx-auto py-4 px-14  rounded-full">
     
            Other Features
            </Link> 
     </div>
      </div>

      
</div>    
        </div>
    )
}