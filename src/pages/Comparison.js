import Navbar from "../components/Navbar";
import { useState } from "react";
export default function Comparison(){
    const [evlist,setEvlist] = useState(0);
    const [evvlist,setEvvlist] = useState(0);
    return(
        <div>
            <Navbar/>
            <div className="">
            <div></div>
            <div className="grid md:grid-cols-6 grid-cols-2 md:gap-x-60 gap-x-2 mt-5 mx-2">
                <button className="md:col-start-2 md:col-span-2 col-start-1 border-2 border-gray-800 hover:transition  col-span-1 rounded-xl bg-stone-100 shadow-lg" onClick={()=>setEvlist(1)}>
                {evlist==1 ? <div><img class="h-40 mx-auto md:h-auto object-cover w-40 md:w-48 rounded-l-xl md:rounded-none md:rounded-l-lg" src="https://imageio.forbes.com/specials-images/imageserve/626d53395e0548350cab771e/0x0.jpg?format=jpg&width=1200" alt="" />
                    </div> :<img class="mx-auto px-16 py-4 rounded-t-lg opacity-20" src="/assets/add_plus.png" alt="product image" />}
                </button>
             
                <button className="md:col-start-4 md:col-span-2 col-start-2 col-span-1 border-2 border-gray-800  rounded-xl bg-stone-100 shadow-lg" onClick={()=>setEvvlist(1)}>
                {evvlist==1 ? <div><img class="h-40 mx-auto md:h-auto object-cover w-40 md:w-48 rounded-l-xl md:rounded-none md:rounded-l-lg" src="https://cars.usnews.com/images/article/201712/127376/1-_concept_vw_ID.Space_vizzion_DB2019AU01600_large_Cropped.jpg" alt="" />
                    </div> :<img class="mx-auto px-16 py-4 rounded-t-lg opacity-20" src="/assets/add_plus.png" alt="product image" />}
                </button>
               
                <div className="md:col-start-2 md:col-span-4 col-start-1 col-span-2 mt-5">
                    
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
                <th scope="col" class="py-3 px-6 md:px-3 md:text-lg text-base font-bold">
                Model 3 
                </th>
               
                <th scope="col" class="py-3 px-6 md:px-3 md:text-lg bg-red-600 rounded-3xl md:w-40   text-base text-white font-bold">
                    Category
                </th>
                
                <th scope="col" class="py-3 px-6 md:px-3 md:text-lg text-base font-bold ">
                ID.3 Pure
                </th>
            </tr>
        </thead>
        <tbody>
        <tr class="bg-white text-center border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-4 px-6">
                    Tesla
                </td>
                <th scope="row" class="py-4 md:px-7 px-10 text-bold">
                    Brand
                </th>
                <td class="py-4 px-6">
                    Volkswagen
                </td>
            </tr>
            <tr class="bg-white text-center border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-4 px-6">
                    4.6
                </td>
                <th scope="row" class="py-4 md:px-7 px-10 text-bold">
                    Acceleration second
                </th>
                <td class="py-4 px-6">
                    10
                </td>
            </tr>
            <tr class="bg-white text-center border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-4 px-6">
                    233
                </td>
                <th scope="row" class="py-4 md:px-7 px-10 text-bold">
                    Top speed kms
                </th>
                <td class="py-4 px-6">
                    160
                </td>
            </tr>
            <tr class="bg-white text-center border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-4 px-6">
                    120000 
                </td>
                <th scope="row" class="py-4 md:px-7 px-10 text-bold">
                    Price
                </th>
                <td class="py-4 px-6">
                    456899
                </td>
            </tr>
            <tr class="bg-gray-50 text-center border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-4 px-6">
                    470
                </td>
                <th scope="row" class="py-4 md:px-7 px-10 text-bold">
                  Range km
                </th>
                <td class="py-4 px-6">
                    230
                </td>
            </tr>
            <tr class="bg-gray-50 text-center border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-6 px-6 text-lg font-bold text-gray-900">
                    8
                </td>
                <th scope="row" class="py-3 px-6 md:px-3 md:text-lg bg-orange-500 rounded-3xl md:w-40   text-base text-white font-bold">
                  Score
                </th>
                <td class="py-6 px-6 text-lg font-bold text-gray-900">
                    7.5
                </td>
            </tr>
        </tbody>
    </table>
</div>

                </div>

            </div>
            </div>
        </div>
    )
}