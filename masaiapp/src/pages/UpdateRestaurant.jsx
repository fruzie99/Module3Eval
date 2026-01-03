import {useParams,useNavigate} from "react-router-dom";
import {getData,saveData} from "../utils/storage";
import { useState } from "react";

export default function UpdateRestaurant(){
    const {id}=useParams();
    const navigate=useNavigate();
    const data=getData();
    const rest=data.find((r)=>r.restaurantID===(id));

    const [name,setName]=useState(rest.restaurantName);

    const update=()=>{
        if (!confirm("Are you sure?")) return;
        rest.restaurantName=name;
        saveData(data);
        navigate("/admin/dashboard");
    };

    return (
        <div>
            <h2>Update Restaurant</h2>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={update}>Update</button>
        </div>
    );
}