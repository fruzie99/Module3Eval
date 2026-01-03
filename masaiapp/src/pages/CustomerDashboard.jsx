import {useEffect,useState} from "react";
import {getData} from "../utils/storage";
import RestaurantCard from "../components/RestaurantCard";  
export default function CustomerDashboard(){
    const [data,setData] = useState(getData());
    useEffect (()=>setData(getData()),[]);
    return data.map((r=><RestaurantCard key={r.restaurantID} r={r} />));
}