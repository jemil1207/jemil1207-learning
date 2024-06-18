import React from 'react'
import About from "./About.js"
import Button from'./Button.js'
let Home=()=>{

let name=" welcome jemil"
let age=12
let a={name:"jemil",age:22,degree:"civil"}
let b=[{name:"pandya",age:12,place:"gujarat"}
      ,{name:"rohit",age:2,place:"mumbai"}
      ,{name:"king",age:17,place:"banglore"}
      ,{name:"msd",age:38,place:"chennai"}
      ,{name:"manish",age:15,place:"kumari"}
      ,{name:"rutu",age:18,place:"maharastra"}]
let count=0
    return(
        <>
        <div > home</div>
        <About myname={name} myage={age} myobj={a}  myarr={b}/>
        <Button mycount={count}/>
        </>
    )
}

export default Home;