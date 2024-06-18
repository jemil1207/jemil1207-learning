import React from 'react'

let Button=()=>{
    let clks=()=>{
        console.log("hi")
    }
    return(

        <button onClick={clks}>submit</button>
    )
}
export default Button;