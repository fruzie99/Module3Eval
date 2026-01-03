import { useState,useActionState } from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = () => {
        if (email==="admin@gmail.com" && password==="admin123") {
            login("admin");
            navigate("/admin/dashboard");
        }
        else if(email==="customer@gmail.com" && password==="cutsomer123"){
            login("customer");
            navigate("/customer/dashboard");
        }
        else{
            alert("Invalid Credentials");
        }
    }

    return(
        <div>
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="text" />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={handleLogin}>Login</button>
        </div>
    )
}