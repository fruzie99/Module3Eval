import { useContext,useEffect,useRef } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar({
    search,
    setSearch,
    filterType,
    setFilterType,
    filterParking,
    setFilterParking,
}) 
{
    const {logout} = useContext(AuthContext);
    
    const inputRef=useRef();

    useEffect(()=>inputRef.current.focus(),[]);
    return (
<div style={{padding :10,borderBottom:"1px solid gray"}}>
    {*Search*}
    <input ref={inputRef} placeholder="Search name/address"
    value="search"
    onChange={(e) => setSearch(e.target.value)}
    >
        <option value="">All</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarathi">Gujarathi</option>
        <option value="Mughlai">Mughlai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
        <option value="Thai">Thai</option>

        </select>

        {/*Parking Filter*/}


        <select value={filterParking} onChange={(e) => setFilterParking(e.target.value)}>
        <option value="">All</option>
        <option value="true"> Parking</option>
        <option value="false">  No Parking</option>
        </select>

        <button onClick={logout}>Logout</button>
</div>





    )
}