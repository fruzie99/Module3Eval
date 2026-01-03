import {useNavigate} from "react-router-dom";
import {getData,saveData} from "../utils/storage";

export default function RestaurantCard({r,isAdmin,refresh}){
    const navigate=useNavigate();
    const del=()=>{
        if (!confirm("Are you sure?")) return;
        const data = getData().filter((x)=>x.restaurantID!==r.restaurantID);
        saveData(data);
        refresh();
    }

    return (
        <div>
            <h4>{r.restaurantName}</h4>
            <p>{r.type}</p>
            {isAdmin && (<>
            <button onClick={()=>navigate(`/admin/restaurants/update/${r.restaurant.ID}`)}>
                Update
                </button>
                <button onClick={del}>Delete</button>
            </>
        )}
        </div>
    );
    }

    
    
