import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Services(){
    return(
        <div className="">
            <div className="flex md:flex-row flex-col gap-6 my-10">
                <Link to="/login">
            <button className="mx-auto w-72 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">User Pattern Recommended Vehicles</p>
            </button>
            </Link>
            <Link to="/form">
            <button className="mx-auto w-72 h-40 shadow-xl mt-4 block bg-blue-100 border-2 border-blue-200 hover:bg-blue-200">
                <p className="text-center font-bold text-xl">User Personalised Recommended Vehicles</p>
            </button>
            </Link>
            <Link to="/trending">
            <button className="mx-auto w-72 h-40 shadow-xl mt-4 block bg-green-100 border-2 border-green-200 hover:bg-green-200">
                  <p className="text-center font-bold text-xl">Rated / Trending Vehicles </p>
                  <p className="mt-2 italic"> Quick launch recommendations</p>
            </button>
            </Link>
            </div>
        </div>
    )
}