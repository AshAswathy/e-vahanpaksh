import Navbar from "./Navbar";
import { EVdata } from "../ev_data.js";
import EVCard from "./EVCard";
import { useState,useEffect } from "react";
import axios from "axios";
export default function RatedTrending(){
    const [cars,setCars] = useState([]);
    const [toprated,setToprated] = useState([])
  const getCars = async() => {
    const config ={
        headers: {
            'Content-Type':'application/json',
            authorization: 'Access-Control-Allow-Origin'
        }
    }
     
    try{
      const d = await axios.get('https://trending-only.onrender.com/postcar',config);
      const toprated = await axios.get('https://toprated.onrender.com/postcar',config);
      var cars = d.data;
      console.log(d);
      setCars(d.data);
      setToprated(toprated.data)
    }catch(e){
        console.log(e);

    }
};
useEffect(() => {
    getCars();
}, [])

    return(
        <div>
            <Navbar/>
            <div className="text-xl font-bold block ml-6 mt-3 ">Trending EVs</div>
            <div class="flex  overflow-x-scroll hide-scroll-bar ">
  <div class="flex flex-nowrap mt-4" >
  {cars && cars.map((data, key) => {
    return (
      <div className="ml-3 md:ml-2" key={key}>
        <EVCard
          key={key}
          model={data.model}
          brand={data.brand}
          priceINR={data.priceINR}
          image={data.picture_url}
        />
      </div>
       );
      })}
      </div>
      </div>
      <div className="text-xl font-bold block ml-6 mt-3 ">Top Rated EVs</div>
      <div class="flex overflow-x-scroll hide-scroll-bar ">
  <div class="flex flex-nowrap mt-4" >
  {toprated && toprated.map((data, key) => {
    return (
      <div className="ml-3 md:ml-2" key={key}>
        <EVCard
          key={key}
          model={data.model}
          brand={data.brand}
          priceINR={data.priceINR}
          image={data.picture_url}
        />
      </div>
       );
      })}
      </div>
      </div>

     
        </div>
    )
}