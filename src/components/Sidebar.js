import React from "react";
import { useState } from "react";
export default function Sidebar() {
    const[showSidebar,setShowSidebar]=useState(false);
    return (
        <div>
        <button className={showSidebar?"flex justify-end mr-3 p-2 ml-48 bg-amber-50 rounded-r-lg":"flex justify-end mr-3 p-2 ml-0"} onClick={()=>setShowSidebar(!showSidebar)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </button>
        {showSidebar ?<div className="">
        <div class="fixed top-0 bottom-0 mt-20 h-screen bg-amber-50  ">
      <div class="w-48 ">
        <div class="flex flex-col justify-between pt-2 ">
          
            <ul class=" space-y-2">
              <li class="min-w-max ">
                <div className="text-xl text-center font-bold p-2 mb-2">
                    Filters
                </div>
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> 1 - 5 Lakh
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> 5 - 10 Lakh
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> 10 - 15 Lakh
                </label>
                </div>
              </li>
              <li class="min-w-max">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> kkk
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> Bike
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> Bike
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> Bike
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> Bike
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> Bike
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> Bike
                </label>
                </div>
              </li>
              <li class="min-w-max ">
                <div class="md:ml-2">
                <label>
                <input type="checkbox" class="accent-green-500 h-5 w-5 rounded-full shadow"/> Bike
                </label>
                </div>
              </li>

             
            </ul>
          </div> 

        </div>
      </div>
    </div>
    : <div className=""/>
}
    </div>
    );
}