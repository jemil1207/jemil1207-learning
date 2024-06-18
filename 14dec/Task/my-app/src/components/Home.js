
  import React, { useState, useEffect  } from 'react';
import jsonData from './data.json';
import Cart from './cart';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Home = (props) => {
  
  // let [clickedItem, setClickedItem] = useState([]);

 
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // let a= useEffect(() => {
  //   (cartItems);
  // }, [cartItems]);





    function font(item) {
      // Add the clicked item to the cartItems array
      setCartItems((prevItems) => [...prevItems, item]);
      
    }
    props.proppiea(cartItems)
    
  

  const data = jsonData;
  let filteredData = props.prp == null ? data.data : data.data.filter((item) => item.size === props.prp);

  return (
    <>
      <div>
        {filteredData.map((item, index) => (
          <div className='all' key={index}>
            <p>
              <img src={item.image} height='200px' alt={item.name} />
            </p>
            <p>{item.name}</p>
            <p>{item.size}</p>
            <p>{item.prize}</p>
            <p>
              <button onClick={() => font(item)}>  {item.b}                      
              </button>
            </p>
            
          </div>
          
        
        ))}
       
       
      </div>
     {/* <Cart  king={cartItems}/> */}
      <Link to='/cart'>
      <button className='cart'><FontAwesomeIcon icon={faCartShopping}/></button>
      </Link>
    </>
  );
};

export default Home;





