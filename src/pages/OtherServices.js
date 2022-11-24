import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function OtherServices(){
    return(
        <div>
            <Navbar/>
            <div className="grid grid-cols-2 md:grid-cols-4">
               
                <Link to="/compare-chart">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Comparison <br/> Chart</p>
            </button>
            </Link>
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Available Schemes</p>
            </button>
            </Link>
               
                <a href="https://kishoremuthu.github.io/ev-tools/?bs=52&bmuco2_nom=90&bmuco2_lb=60&bmuco2_ub=110&evc_nom=16&evc_lb=14&evc_ub=18&cl_nom=18&cl_lb=17&cl_ub=19&cco2_nom=60&cco2_lb=40&cco2_ub=80&icec_nom=6.0&icec_lb=5.0&icec_ub=7.0&gco2_nom=2.80&gco2_lb=2.75&gco2_ub=2.85&round=true">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">EV Eco-Merit Calculator</p>
            </button>
            </a>
            
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Home Charging Calculator</p>
            </button>
            </Link>
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Public Charging Calculator</p>
            </button>
            </Link>
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Journey Cost Calculator</p>
            </button>
            </Link>
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Crude Oil Saving Calculator</p>
            </button>
            </Link>
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">EV Charger Map</p>
            </button>
            </Link>
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Electric Cost Map</p>
            </button>
            </Link>
            <Link to="/schemes">
            <button className="mx-auto md:w-72 w-44 md:h-40 h-40 shadow-xl mt-4 bg-red-100 block border-2 border-red-200 hover:bg-red-200">
                <p className="text-center font-bold text-xl">Electric Cost Map</p>
            </button>
            </Link>
             

            </div>
        </div>
    )
}