import React from 'react'
import { useState } from 'react'
const About = () => {
    const[data ,setData]=useState("")
const clk=()=>{

    setData('hi')

}
  return (
    <div>
         <div>
        <button onClick={clk}>click me</button>
      <p>{data}</p>
    </div>
      
    </div>
  )
}

export default About
