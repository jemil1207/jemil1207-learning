
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import { FaUserCircle } from "react-icons/fa";

export const Home = () => {

  
  const userName = localStorage.getItem('Username');
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  const list = JSON.parse(localStorage.getItem(userName)) || [];

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(list);
  const [pass,setPass]=useState('')
  useEffect(() => {
    const string= JSON.stringify(tasks);
    localStorage.setItem(userName, string);
  }, [tasks]);

  const handleAdd = () => {
    setTask('');
    setTasks([...tasks, task]);
   };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const [edit, setEdit]=useState(null)
 const handleEdit=(index)=>{
  const Edit=[...tasks]
  Edit[index]=task
  setEdit(null)
  setTask('')
  setTasks(Edit)
 }

 

  return (
    <>
      <div>
        
        <header className="header">Welcome, {userName} Create Your tasks
         < FaUserCircle className="image" /></header>

         
         {/* <button onClick={handleLogout}>Logout</button> */}
         {/* <button  onClick={handleReset}> resetpassword</button> */}



         
        <div className="all">
        <input className="input" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button className='addbutton'onClick={handleAdd}>Add</button>
        <div className="listall">
        <table className="table">
          
          {tasks.map((a, index) => (
            <tr key={index} >
              {edit===index?(
              <>
              <td>{index+1}</td>
               <td> <input  type="text" value={task} onChange={(e)=>setTask(e.target.value)}/></td>
               <td> <button onClick={()=>handleEdit(index)}>Save</button> 
                </td>
              </>
              ):(
                <>
                <td className="index">{index+1}</td>
             <td className="content"> {a} </td>
             <td><button className="del" onClick={() => handleDelete(index)}>Delete</button></td>
             <td> <button className="edit" onClick={() => setEdit(index)}>Edit</button></td>
              </>
              )}
            </tr>
          ))}
        
        </table>
        </div>
        </div>
        
        </div>

      
    </>
  );
};







// import React, { useEffect, useState } from "react" 
// import { FaTrash } from "react-icons/fa"; 
// import { FaEdit } from "react-icons/fa"; 
// import { useNavigate } from "react-router-dom"; 
 
//  const Home = () => { 
//     const userName = localStorage.getItem('Username'); 
//     const password=localStorage.getItem('Password') 
//     const Users=localStorage.getItem('users') 
//     // console.log(Users) 
//     const navigate = useNavigate(); 
//     const handleLogout = () => { 
//         navigate('/'); 
//     }; 
//     const List=JSON.parse(localStorage.getItem(userName)) || [] 
 
//     const [task, setTask] = useState('') 
//     const [tasks, setTasks] = useState(List) 
     
//     useEffect(() => { 
//         const stringiy = JSON.stringify(tasks) 
//         localStorage.setItem(userName, stringiy) 
//     }, [tasks]) 
//     const handleAdd = () => { 
//         setTask('') 
//         setTasks([...tasks, task]) 
//         setSearch(false) 
//     } 
//     const handleDelete=(index)=>{ 
//         const Delete=tasks.filter((a,i)=>i!==index) 
//         setTasks(Delete) 
//     } 
//     const[edit,setEdit]=useState(null) 
//     const handleEdit=(index)=>{ 
//         // const Edit=tasks.find((i)=>i===index) 
//         // setEdit(null)    
//         // setTask('') 
//         // const Edit=tasks[index] 
//         // setEdit(index) 
//         // setTask(Edit) 
//         const Edit = [...tasks]; 
//         Edit[index] = task; 
//         setTasks(Edit); 
//         setEdit(null); 
//         setTask(''); 
         
//     } 
//     // const handleEdit=(a,index)=>{ 
//     //     setEdit(null) 
//     //     setTasks([...tasks]) 
//     // } 
//     const[reset,setReset]=useState(List) 
//     const[user,setUser]=useState(userName) 
//     const[pass,setPassword]=useState(password) 
//     // const Data=[user,pass] 
//     const handleUpdate=()=>{ 
       
// //    console.log(user) 
//     //    localStorage.setItem("Update",JSON.stringify(Data))  
//     //    const Datas=localStorage.getItem("Update") 
//     //    const DataA=JSON.parse(Datas) 
//     //    const USERS=Users.filter(a=>a===Data) 
 
//     localStorage.setItem("Username",user) 
//     localStorage.setItem("Password",pass) 
//     setReset([...tasks,task]) 
//     const User=JSON.parse(localStorage.getItem('users')) 
//     const UserName=localStorage.getItem('Username') 
//     const Pass=localStorage.getItem('Password') 
//     const Hello= User.find(a=>a.Username===UserName&& a.Password===Pass) 
     
//     console.log(Hello) 
//  //    console.log(DataA) 
//     } 
 
//     const[line,setLine]=useState('') 
//     const[linecolor,setlineColor]=useState({color:'black'}) 
//     const handleLine=(index)=>{ 
//         setLine((b) => ({...b,[index]: !b[index]})); 
//         // setlineColor({color:'red'}) 
//     } 
 
//     const[search,setSearch]=useState('') 
//     const Search=tasks.filter(a=>a===task) 
//     const handleSearch=()=>{ 
//         // console.log(Search) 
//         setSearch(true) 
//     } 
//     return ( 
//       <>
//       <div>
//         {reset !== true ? (
//           <>
//             <b onClick={() => setReset(true)}>Profile</b>
//           </>
//         ) : (
//           <>
//             <label>Username : </label>
//             <input className="input" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
//             <br />
//             <label>Password : </label>
//             <input type="password" value={pass} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleUpdate}>Update</button>
//           </>
//         )}
//         <button onClick={handleLogout} className="Out">
//           Logout
//         </button>
//         <div className="All">
//           <h2>Welcome, {userName} Create Your tasks</h2>
//           <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
//           <button  className='addbutton'onClick={handleAdd}>Add</button>
//           <button style={{ marginTop: '5px' }} onClick={handleSearch}>
//             Search
//           </button>
//         </div>
    
//         <div className="List">
//           {search === true ? (
//             <table className="Num">
//               {Search.map((a, index) => (
//                 <tr key={index}>
//                   {edit === index ? (
//                     <>
//                       <td style={{ border: '2px solid white', textAlign: 'center', color: 'rgb(208, 242, 136)' }}>{index + 1}</td>
//                       <td>
//                         <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
//                       </td>
//                       <td>
//                         <button onClick={() => handleEdit(index)}>Save</button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td style={{ color: 'rgb(208, 242, 136)', border: '2px solid white', textAlign: 'center' }}>{index + 1}</td>
//                       <td>
//                         <b
//                           style={{
//                             color: 'rgb(208, 242, 136)',
//                             marginLeft: '20px',
//                             textDecoration: line[index] ? 'line-through' : 'none',
//                             color: linecolor.color,
//                           }}
//                         >
//                           {a}
//                         </b>
//                       </td>
//                       <td>
//                         <input onClick={() => handleLine(index)} type="checkbox" />
//                       </td>
//                       <td style={{ marginLeft: '20px', border: '2px solid white', textAlign: 'center' }}>
//                         <button onClick={() => setEdit(index)}>
//                           <FaEdit />
//                         </button>
//                       </td>
//                       <td style={{ marginLeft: '20px', border: '2px solid white', textAlign: 'center' }}>
//                         <button onClick={() => handleDelete(index)}>
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </table>
//           ) : (
//             <table className="Num">
//               {tasks.map((a, index) => (
//                 <tr key={index}>
//                   {edit === index ? (
//                     <>
//                       <td style={{ border: '2px solid white', textAlign: 'center', color: 'rgb(208, 242, 136)' }}>{index + 1}</td>
//                       <td>
//                         <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
//                       </td>
//                       <td>
//                         <button onClick={() => handleEdit(index)}>Save</button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td style={{ color: 'rgb(208, 242, 136)', border: '2px solid white', textAlign: 'center' }}>{index + 1}</td>
//                       <td>
//                         <b
//                           style={{
//                             color: 'rgb(208, 242, 136)',
//                             marginLeft: '20px',
//                             textDecoration: line[index] ? 'line-through' : 'none',
//                             color: linecolor.color,
//                           }}
//                         >
//                           {a}
//                         </b>
//                       </td>
//                       <td>
//                         <input onClick={() => handleLine(index)} type="checkbox" />
//                       </td>
//                       <td style={{ marginLeft: '20px', border: '2px solid white', textAlign: 'center' }}>
//                         <button onClick={() => setEdit(index)}>
//                           <FaEdit />
//                         </button>
//                       </td>
//                       <td style={{ marginLeft: '20px', border: '2px solid white', textAlign: 'center' }}>
//                         <button onClick={() => handleDelete(index)}>
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </table>
//           )}
//         </div>
//       </div>
//     </>
//  )}
    export default Home