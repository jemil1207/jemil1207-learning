import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
const Fetch = () => {

    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          setData(response.data);
        } catch (error) {
          console.error( error);
        }
      };
    
    //   fetchData();
      useEffect(() => {
        fetchData();
      }, []);

      console.log(data)
  return (
    <div>
      <table>
        <tr>
        <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
        </tr> 
        {data.map((item, index) => item.completed===true?(
          <tr key={index}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed.toString()}</td>
          </tr>
        ):null)}
      
    </table>
  </div>
);
}

export default Fetch;
