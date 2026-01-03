import {useEffect,useState} from "react";
import {getData} from "../utils/storage";
import RestaurantCard from "../components/RestaurantCard";
import AddRestaurant from "../components/AddRestaurant";

export default function AdminDashboard(){
    const [data,setData] = useState(getData());
    const refresth=()=>setData(getData());
    useEffect(refresth,[]);

return (
    <div>
        <h1>Admin Dashboard</h1>
        <AddRestaurant refresth={refresth} />
        {data.map((r) => (
            <RestaurantCard key={r.restaurantID}  r={r} isAdmin refresth={refresth} AdminDashboard/>
        ))}
    </div>
);


}

