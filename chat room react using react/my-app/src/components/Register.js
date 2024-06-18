import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./Register.css"

const Register = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        email: "",
        mobile: "",
        password: "",
        confirmpassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.firstname == "" || value.lastname == "" || value.dateofbirth == "" || value.email == "" || value.mobile == "" || value.password == "" || value.confirmpassword == "") {
            alert("Please fill all the fields");
        } else {
            if (value.password !== value.confirmpassword) {
                alert("Passwords do not match");
            } else {
                const oldData = JSON.parse(localStorage.getItem("data")) || [];
                const newData = [...oldData, value];
                localStorage.setItem("data", JSON.stringify(newData));

                alert("Registration successful");
                navigate("/");
            }
        }

        setValue({
            firstname: "",
            lastname: "",
            dateofbirth: "",
            email: "",
            mobile: "",
            password: "",
            confirmpassword: ""
        });
    };

    return (
        <div className='regmain'>
            <div className='regsec'>
                <div className='reg'>Register</div>
                <input className='regfirst' type='text' value={value.firstname} name='firstname' placeholder="First Name" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
                <input className ="reglast" type='text' value={value.lastname} name='lastname' placeholder="Last Name" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
                <input className='regdateofbirth' type='date' value={value.dateofbirth} name='dateofbirth' placeholder="Date of Birth" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
                <input className='regemail' type='email' value={value.email} name='email' placeholder="E-mail" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
                <input className="regmobile"type='tel' value={value.mobile} name='mobile' placeholder="Mobile Number" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
                <input className='regpass' type='password' value={value.password} name='password' placeholder="Password" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
                <input className='regconfrimpass' type='password' value={value.confirmpassword} name='confirmpassword' placeholder="Confirm Password" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
                <button className='regcreate' type="submit" onClick={handleSubmit}>Create</button>
            </div>
        </div>
    );
};

export default Register;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Update this line

// const Register = () => {
//     const navigate = useNavigate();
//     const [value, setValue] = useState({
//         firstname: "",
//         lastname: "",
//         dateofbirth: "",
//         email: "",
//         mobile: "",
//         password: "",
//         confirmpassword: ""
//     });

//     const [passwordStrength, setPasswordStrength] = useState("");

//     const checkPasswordStrength = (password) => {
//         // Define your criteria for password strength
//         if (password.length >= 8) {
//             setPasswordStrength("strong");
//         } else if (password.length >= 6) {
//             setPasswordStrength("medium");
//         } else {
//             setPasswordStrength("weak");
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (value.firstname === "" || value.lastname === "" || value.dateofbirth === "" || value.email === "" || value.mobile === "" || value.password === "" || value.confirmpassword === "") {
//             alert("Please fill all the fields");
//         } else {
//             if (value.password !== value.confirmpassword) {
//                 alert("Passwords do not match");
//             } else {
//                 const oldData = JSON.parse(localStorage.getItem("data")) || [];
//                 const newData = [...oldData, value];
//                 localStorage.setItem("data", JSON.stringify(newData));

//                 alert("Registration successful");
//                 navigate("/");
//             }
//         }

//         setValue({
//             firstname: "",
//             lastname: "",
//             dateofbirth: "",
//             email: "",
//             mobile: "",
//             password: "",
//             confirmpassword: ""
//         });
//     };

//     const handlePasswordChange = (e) => {
//         const password = e.target.value;
//         setValue({ ...value, password: password });
//         checkPasswordStrength(password);
//     };

//     return (
//         <div>
//             <div>
//                 <input type='text' value={value.firstname} name='firstname' placeholder="First Name" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
//                 <input type='text' value={value.lastname} name='lastname' placeholder="Last Name" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
//                 <input type='date' value={value.dateofbirth} name='dateofbirth' placeholder="Date of Birth" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
//                 <input type='email' value={value.email} name='email' placeholder="E-mail" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
//                 <input type='tel' value={value.mobile} name='mobile' placeholder="Mobile Number" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
//                 <input type='password' value={value.password} name='password' placeholder="Password" onChange={handlePasswordChange} /><br />
//                 <span>Password Strength: {passwordStrength}</span><br />
//                 <input type='password' value={value.confirmpassword} name='confirmpassword' placeholder="Confirm Password" onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} /><br />
//                 <button type="submit" onClick={handleSubmit}>Create</button>
//             </div>
//         </div>
//     );
// };

// export default Register;
