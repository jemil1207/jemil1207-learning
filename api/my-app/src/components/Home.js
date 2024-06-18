// import React, { useState,useEffect } from 'react'
// import axios from 'axios';
// import './Home.css'
// const Home = () => {

//     const[data, setData]=useState([])
//     const fetch = async()=>{
//         try{
//             const response= await axios.get('https://fakestoreapi.com/products')
//             setData(response.data);
//         }
//         catch(error){
//             console.error(error)
//         }
//     }
//     useEffect(() => {
//         fetch();
//       }, []);


      

//       console.log(data)
//   return (
//     <div>
//     <div>
//             <div className='all'>
//                 {data.map((item, index) => (
//                     <div key={index}>
//                     <div>{item.id}</div>
//                     <div ><img className='image'src={item.image}/></div>
//                     <div>{item.title}</div>
//                     <div>{item.price}</div>
//                     <div>{item.description}</div>
//                     <div>{item.category}</div>
//                     <div>{item.rating.rate}</div>

//                     </div>
//                 ))}
//             </div>

//     </div>
//   </div>
  
//   )
// }

// export default Home




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Rating from 'react-rating-stars-component';


// const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     const starArray = [];

    
//     for (let i = 0; i < fullStars; i++) {
//         starArray.push(<span key={i}>&#9733;</span>); 
//     }

    
//     if (halfStar) {
//         starArray.push(<span key="half" style={{ width: '50%', overflow: 'hidden' }}>&#9733;</span>);
//     }

    
//     for (let i = 0; i < emptyStars; i++) {
//         starArray.push(<span key={`empty${i}`}>&#9734;</span>); 
//     }

//     return starArray;
// };

const Home = () => {
    const [data, setData] = useState([]);

    const fetch = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetch();
    }, []);


    // const renderStars = (rating) => {
    //     const roundedRating = Math.round(rating); // Round the rating to the nearest whole number
    //     const starString = '★'.repeat(roundedRating); // Unicode character for a solid star
    //     return starString;
    // };

    console.log(data)

    return (
        <>
            <div className='all'>
                {data.map((item, index) => (
                    <p key={index} className='allitem'>
                        <p>{item.id}</p>
                        <p>
                            <img className='image' src={item.image} alt={item.title} />
                            </p>
                        <p>{item.title}</p>
                        <p> <b>Price:</b>{item.price}</p>
                        
                        <p>{item.category}</p>
                        <p><button>add to cart</button></p>
                        {/* <p> <b>Ratings:</b>{renderStars(item.rating.rate)}({item.rating.count})</p> */}
                        <p  classNames='rate'> Ratings: <Rating  count={5} value={item.rating.rate} size={25} activeColor="red" edit={true} /></p>
                        <p className='description'> <b>Description:</b>{item.description}</p>
                        
                    </p>
                ))}
            </div>
        </>
    );
};

export default Home;
