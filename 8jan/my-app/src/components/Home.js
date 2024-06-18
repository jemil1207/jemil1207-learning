// 

import React, { useState,useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(user);

  return (
    <div>
    


    {user.length > 0 && (
        <table>
                    <tr>
                        <td>id</td>
                        <td>userid</td>
                        <td>title</td>
                        <td>completed</td>
                    </tr>
                    {user.map((user, index) => {
              if (user.completed === true && user.id % 2 === 0) {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.userId}</td>
                    <td>{user.title}</td>
                    <td>{user.completed.toString()}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
        </table>
      )}



    </div>
  );
};

export default Home;
