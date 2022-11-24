import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function ReportPage(){
    return(
        <div>
            <Navbar/>
            <div className="text-3xl font-bold mt-3 mb-3 ml-5 my-4">
                Hello Sam,
            </div>
            <div className="text-xs font-semibold mx-5 my-2 mb-2">
                Here you get the most suited automobile based on your driving pattern !
            </div>
            <div>
                <p className="ml-5 font-bold">Top Recommendation</p>
            <Link to="/view-vehicle"><div class="flex justify-center">
  <div class="flex flex-row md:max-w-xl rounded-xl w-xl mx-5 h-56 justify-center bg-white shadow-lg">
    <img class="h-56 md:h-auto object-cover w-28 md:w-48 rounded-l-xl md:rounded-none md:rounded-l-lg" src="https://media.zigcdn.com/media/model/2021/Aug/ola-electric-scoo-right-side-view_600x400.jpg" alt="" />
    <div class="p-2 flex flex-col justify-start w-56">
   <div className="flex justify-end"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg></div>

      <h5 class="text-gray-900 text-lg font-medium mb-2 ml-1">Ola S1</h5>
      <p className="text-gray-700 text-base md:text-lg font-bold ml-1"> • Price : ₹79,999</p>
      <p className="text-gray-700 text-base md:text-lg font-bold ml-1"> • TCO/km : ₹0.512</p>
      <p className="text-gray-700 text-sm md:text-lg ml-4 mt-1">Charging time: 7 hours</p>
      <p className="text-gray-700 text-sm md:text-lg ml-4">Top Speed: 116 kmph</p>
      <p className="text-gray-700 text-sm md:text-lg ml-4">Range/charge: 181 kms</p>
      <p className="text-gray-700 text-sm md:text-lg ml-4">Battery Power: 4 kWh</p>
      
    <a className="text-xs font-bold md:text-lg ml-32 mt-1 text-blue-600">View More</a>  
    </div>
  </div>
</div></Link>
<p className="ml-5 mt-3 font-bold"> Other Recommendations</p>
<div className="flex flex-row justify-center mt-2">
<div class=" md:max-w-xl rounded-xl w-40 mx-1 h-56 justify-center bg-white shadow-lg">

    <div class="p-2 flex flex-col justify-start w-40 ml-2 ">
   
    <h5 class="text-gray-900 text-lg font-medium mb-2 ml-1 mt-2">Bajaj Chetak</h5>
      <p className="text-gray-700 text-base md:text-lg font-bold ml-1">Price : ₹1,26,354</p>
      <p className="text-gray-700 text-base md:text-lg font-bold ml-1">TCO/km : ₹</p>
      <p className="text-gray-700 text-sm md:text-lg mt-2">Charging time: 6 hours</p>
      <p className="text-gray-700 text-sm md:text-lg ">Top Speed: 63 kmph</p>
      <p className="text-gray-700 text-sm md:text-lg ">Range/charge: 95 kms</p>
      <p className="text-gray-700 text-sm md:text-lg ">Battery Power: 5 kWh</p>
      <a className="text-xs font-bold md:text-lg ml-16 mt-2 text-blue-600">View More</a>  
    </div>
  </div>
  <div class="md:max-w-xl rounded-xl w-40 mx-1 h-56 justify-center bg-white shadow-lg">
   
    <div class="p-2 flex flex-col justify-start ml-2 w-40">
   

    <h5 class="text-gray-900 text-lg font-medium mb-2 ml-1 mt-1">Alther 450X</h5>
      <p className="text-gray-700 text-base md:text-lg font-bold ml-1">Price : ₹1,35,000</p>
      <p className="text-gray-700 text-base md:text-lg font-bold ml-1">TCO : ₹</p>

      <p className="text-gray-700 text-sm md:text-lg mt-3">Top Speed: 90 kmph</p>
      <p className="text-gray-700 text-sm md:text-lg ">Range/charge: 115 kms</p>
      <p className="text-gray-700 text-sm md:text-lg ">Battery Power: 5 kWh</p>
      <a className="text-xs font-bold md:text-lg ml-16 mt-2 text-blue-600">View More</a> 
    </div>
  </div>
  </div>
            </div>
        </div>
    )
}