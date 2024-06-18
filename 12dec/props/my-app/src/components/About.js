import React from 'react'
 import "./About.css";
let About=(props)=>{

    //  console.log(props.myarr)
    console.log(props.myname)
    console.log(props.myage)
    console.log(props.myobj)
    const data=props.myarr
  


    return(
        <>
        <div>about</div>
        <div style={{color:"red"}}>{props.myname}</div>
        <div>{props.myage}</div>
        <div className="obj">{props.myobj.name}</div>
        <div>{props.myobj.age}</div>
        <div>{props.myobj.degree}</div>
        <table>
            <tr>
                <td>s.no</td>
                <td>name</td>
                 <td>age</td>
                 <td>place</td>
                 
            </tr>
            
                 {data.map((items,b)=>
                    items.age>=18?
                    


                    <tr  >
                        <td>{b+1}</td>
                        <td>{items.name}</td>
                        <td>{items.age}</td>
                        <td>{items.place}</td>
                        </tr>:null
                   )
                 }  
                 
                            
                    
            
        </table>
        </>
    )
}

export default About;