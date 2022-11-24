import { EVdata } from "../ev_data.js";
import EVCard from "../components/EVCard";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";
export default function AllVehicles(){
    return(
        <div>
            <Navbar/>            
            <div class="">
               <div className=""> <Sidebar /></div>
                <div class="md:ml-4 ml-24">
                <div class="grid md:grid-cols-5 grid-cols-1 gap-3 md:gap-4 mt-4">
                {EVdata.map((data, key) => {
                    return (
                    <div key={key}>
                        <EVCard
                        key={key}
                        model={data.model}
                        brand={data.brand}
                        priceINR={data.priceINR}
                    
                        />
                    </div>
                    );
                    })}
                    </div>
                    </div>
   
</div>
        </div>
    )
}