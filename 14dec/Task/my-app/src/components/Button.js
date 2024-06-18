import { useState } from'react'
import React from 'react';
import Home from './Home.js'

let Button=({you})=>{
let [setdata,setvalue]=useState(null)

let b1=()=> {

  setvalue("L")
}
let b2=()=>{
  setvalue("XL")
}

let b3=()=>{

  
      setvalue("XXL")
}

let [call, calla]=useState(null)
const king=(a)=>{
  calla(a)
}
you(call)
    return(


<><div>
             <div className='button'>
              <p> SIZES</p><br></br>
             
                <p><button onClick={b1}>L</button></p>
                <p><button onClick={b2} >XL</button></p>
               <p><button onClick={b3} >XXL</button></p> 
               
               
        </div> 
        
        </div>
        <div><Home prp={setdata}  proppiea={king}/>
        </div>
        
        
           
        </>  
        

    )
    }
    export default Button;

