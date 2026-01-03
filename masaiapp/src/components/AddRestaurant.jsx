import {useState} from "react";
import { getData,saveData } from "../utils/storage";

export default function AddRestaurant({refresh}) {
    const [name,setName] = useState("");
    
    const ad=()=>{
        const data = getData();
        data.push({
            
  "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
}

        );
        saveData(data);
        refresh();
        setName("");
    }
    return (
        <div>
            <h2>Add Restaurant</h2>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={ad}>Add</button>
        </div>
    );
    }
