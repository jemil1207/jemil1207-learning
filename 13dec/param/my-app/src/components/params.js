import React from 'react'
import {useParams} from 'react-router-dom';



let Params=()=>{



     const { id} = useParams();

    

    return(
       <div>  page {id} </div>     
    );
}

export default Params;