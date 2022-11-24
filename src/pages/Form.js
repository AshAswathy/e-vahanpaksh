import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Form(){
    return (
        <div>
          <Navbar/>
          <div className="h-full w-1/2 bg-stone-50 mx-auto">
      <div class="p-12">
        <h1 class="font-medium text-3xl text-center">FILTER PAGE</h1>
        <p class="text-gray-600 mt-6 font-normal text-xl text-center">Filter your custom filters</p>

        <form>
          <div class="mt-5">
            <div className="flex flex-row">
              <label for="prize" class="text-xl mt-4 text-gray-700 font-semibold">Prize</label>
              <div className="flex flex-row">
                <div class="items-center p-2 mr-3">
                  <input id="checkbox-1" type="checkbox" value="" name="checkbox" class="accent-green-500 focus:ring-green-500  focus:ring-2 h-5 w-5 rounded-full shadow" />
                  <label for="checkbox-1" class="ml-2 mb-1 text-sm font-medium text-gray-900">Option 1</label>
                </div>       
                <div class="items-center p-2 mr-3">
                  <input id="checkbox-2" type="checkbox" value="" name="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="checkbox-2" class="ml-2 mb-1 text-sm font-medium text-gray-900">Option 2</label>
                </div>     
                </div>
            </div>

            <div class="mt-6">
              <label for="battery" class="text-xl text-gray-700 block mb-1 font-semibold">Battery</label>
              <div class="flex">
                <div class="items-center p-5 mt-4 w-44 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-1" class="py-4 ml-2 w-24 text-sm font-medium text-gray-900">High Life</label>
                </div>       
                <div class="items-center p-5 mt-4 w-44 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-2" class="py-4 ml-2 w-24 text-sm font-medium text-gray-900">Average Life</label>
                </div>     
              </div>
            </div>

            <div class="mt-6">
              <label for="brand" class="text-xl text-gray-700 block mb-1 font-semibold">Brand</label>
              <div class="flex">
              <ul class="grid gap-6 w-full md:grid-cols-5 mt-4">
                <li>
                    <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                    <label for="react-option" class="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded border border-gray-500 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 ">                           
                        <div class="block">
                            <div class="w-full text-lg font-semibold">Honda</div>
                            <div class="w-full text-sm">Description</div>
                        </div>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="flowbite-option" value="" class="hidden peer" />
                    <label for="flowbite-option" class="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded border border-gray-500 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 ">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">Tata</div>
                            <div class="w-full text-sm">Description</div>
                        </div>
                    </label>
                </li>
              </ul>
              </div>
            </div>

            <div class="mt-6">
              <label for="speed" class="text-xl text-gray-700 block mb-1 font-semibold">Top-speed</label>
              <div class="flex">
                <div class="items-center p-5 mt-4 w-44 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-1" class="py-4 ml-2 w-24 text-sm font-medium text-gray-900">Less than 100</label>
                </div>       
                <div class="items-center p-5 mt-4 w-44 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-2" class="py-4 ml-2 w-24 text-sm font-medium text-gray-900">100-200</label>
                </div>     
                <div class="items-center p-5 mt-4 w-44 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-3" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-3" class="py-4 ml-2 w-24 text-sm font-medium text-gray-900">More than 200</label>
                </div>  
              </div>
            </div>

            <div class="mt-6">
              <label for="range" class="text-xl text-gray-700 block mb-1 font-semibold">Range for Full Battery</label>
              <div class="flex">
                <div class="items-center p-5 mt-4 w-48 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-1" class="py-4 ml-2 w-28 text-sm font-medium text-gray-900">Less than 200 km</label>
                </div>       
                <div class="items-center p-5 mt-4 w-48 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-2" class="py-4 ml-2 w-28 text-sm font-medium text-gray-900">200 km - 400 km</label>
                </div>     
                <div class="items-center p-5 mt-4 w-48 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-3" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-3" class="py-4 ml-2 w-28 text-sm font-medium text-gray-900">More than 400 km</label>
                </div>  
              </div>
            </div>

            <div class="mt-6">
              <label for="charge" class="text-xl text-gray-700 block mb-1 font-semibold">Fast charge</label>
              <div class="flex">
                <div class="items-center p-5 mt-4 w-44 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-1" class="py-4 ml-2 w-24 text-sm font-medium text-gray-900">Yes</label>
                </div>       
                <div class="items-center p-5 mt-4 w-44 mr-5 rounded border border-gray-500">
                  <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                  <label for="bordered-checkbox-2" class="py-4 ml-2 w-24 text-sm font-medium text-gray-900">No</label>
                </div>     
              </div>
            </div>



          </div>

          <div class="space-x-4 mt-8">
          <Link
                    to="/report"
                    aria-label="dashboard"
        class="shadow-xl mb-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green-500 hover:bg-blue-600 text-white md:text-lg text-base font-bold md:py-4 md:px-10 mx-auto py-4 px-8 mt-2 rounded-xl">
     
            Submit
            </Link>
          </div>

        </form>
      </div>
    </div>
    </div>
    )
}