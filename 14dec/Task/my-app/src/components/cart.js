// Cart.js

import React from 'react';

const Cart = ({ propb }) => {
  return (
    <>
    <div>
      <div className='arr'>
        {/* Assuming king is an array of items */}
        {propb && propb.length > 0 ? (
          propb.map((item, index) => (
            <div  key={index}>
              <div>{item.name}</div>
              <div>{item.size}</div>
              <div>{item.prize}</div>
              <div><img src={item.image}  height='200px' alt={item.name} /></div>
              <div >qty</div>
            </div>
           
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      
      </div>
    </>
  );
};

export default Cart;





