import React from 'react'
import { useState } from 'react'

let Button=()=>{
    // let cnt= mycount
//     let add=()=>{
//         count=count+1
//         console.log(count)
    // }


    // let sub=()=>{
    //     count=count-1
    //     console.log(count)
    // }



    const [count,setCount]=useState(0)
    function add(){
        setCount(count+1)
    }

    function sub(){
        setCount(count-1)
    }

    return(
      <>
        <h1>{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>

        </>
    )
}
export default Button;