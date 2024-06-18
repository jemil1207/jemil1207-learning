import React from 'react'
import { useLocation } from "react-router-dom";
let Location=()=>{

const Location = useLocation()
console.log(Location)
    return(
 
        <div>name:{Location.pathname}</div>
    )
}

export default Location;
