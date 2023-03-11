import axios from "axios";
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import Config from "../Config.json";
const TITLE = "Register | " + Config["SITE TITLE"]
const DESC = "Register here"
const CANONICAL = Config.SITE_DOMAIN + "/";


function Studentdataedit(){

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [dob, setDOB] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const registerHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",firstname:firstname,lastname:lastname,dob:dob,phonenumber:phonenumber,email:email,password:password,role:role}
    
    try {
      const { data } = await axios
        .post('http://localhost/backend_react/studentdataedit.php', config)
        .then((response) => {
          console.log(response.data)
        //   navigate('/studentedit')
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      setTimeout(() => {
        setError('Invalid credentials...')
      }, 10)
    }
  }
  
    return(
        <main>
             <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
            
        </Helmet>


    <form onSubmit={registerHandle} method='post'>

    <div id="registercontainer">
      <div class="registercred">
        <div class="reg-details">
            <h1>Edit Details</h1>
          <label>First Name</label>
          <input id="firstname" type="text" pattern="[a-zA-Z ]+" onChange={(e) => setFirstName(e.target.value)} placeholder="First name" required/>
          <label>Last Name</label>
          <input id="lastname" type="text" pattern="[a-zA-Z ]+" onChange={(e) => setLastName(e.target.value)} placeholder="Last name" required/>
          <label>Date of Birth</label>
          <input id="dob" type="date" onChange={(e) => setDOB(e.target.value)} placeholder="09-01-2001" required/>
          <label>Contact Number</label>
          <input id="phonenumber" type="tel" pattern="[0-9]{10}" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="123-456-7890" required/>
          <label>Email</label>
          <input id="regemail" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email@email.com" required/>
          <label>Password</label>
          <input id="regpassword" type="password" pattern="{6,}/" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
          <label >Please select a role type </label>


        <label for="role">Student</label>
        <input id="role" type="radio" name="role" value="Student" onChange={(e) => setRole(e.target.value)} style={{height:15, width:'auto'}} required/> 
        
        <label for="role">Business Owner</label>
        <input id="role" type="radio" name="role" value="Business Owner" onChange={(e) => setRole(e.target.value)} style={{height:15, width:'auto'}} /> 
        
        <label for="role">Admin</label>
        <input id="role" type="radio" name="role" value="Admin" onChange={(e) => setRole(e.target.value)} style={{height:15, width:'auto'}} /> 

        <label for="role">Super Admin</label>
        <input id="role" type="radio" name="role" value="Super Admin" onChange={(e) => setRole(e.target.value)} style={{height:15, width:'auto'}} /> 
       
     

          <a href="mailto:email@example.com">
          <button type="submit" id="register" style={{ marginBottom: 30 }}>Submit</button>
        </a>
        </div>
      </div>
    </div>
    </form>



</main>

    )
    }

export default Studentdataedit;














// function Register(){

//   const [firstname, setFirstName] = useState('')
//   const [lastname, setLastName] = useState('')
//   const [dob, setDOB] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [role, setRole] = React.useState('member');
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const registerHandle = async (e) => {
//     e.preventDefault()
//     let config = {method:"POST",firstname:firstname,lastname:lastname,dob:dob,email:email,password:password,role:role}
    
//     try {
//       const { data } = await axios
//         .post('http://localhost/backend_react/register.php', config)
//         .then((response) => {
//           //console.log(response.data)
//           navigate('/login')
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//     } catch (error) {
//       setTimeout(() => {
//         setError('Invalid credentials...')
//       }, 10)
//     }
//   }
  

//     return(
//         <main>
//              <Helmet>
//             <title>
//                 {TITLE}
//             </title>
//             <link rel = "canonical" href={CANONICAL} />
//             <meta name="description" content={DESC} />
            
//         </Helmet>
//         <section>
//       <div id="row">
//         <div id="column">
//           <div class="logincard">
//             <div class="studentcontain">
//               <h3><b>Student</b></h3>
//             </div>
//           </div>
//         </div>
//         <div id="column">
//           <div class="logincard">
//             <div class="officecontain">
//               <h3><b>Business Owner</b></h3>
//             </div>
//           </div>
//         </div>
//         <div id="column">
//           <div class="logincard">
//             <div class="schoolcontain">
//               <h3><b>School Admin</b></h3>
//             </div>
//           </div>
//         </div>
//         <div id="column">
//           <div class="logincard">
//             <div class="supercontain">
//               <h3><b>Super Admin</b></h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <form onSubmit={registerHandle} method='post'>

//     <div id="registercontainer">
//       <div class="registercred">
//         <div class="reg-details">
//             <h1>Register</h1>
//           <label>First Name</label>
//           <input id="firstname" type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First name" required/>
//           <label>Last Name</label>
//           <input id="lastname" type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last name" required/>
//           <label>Date of Birth</label>
//           <input id="dob" type="date" onChange={(e) => setDOB(e.target.value)} placeholder="09-01-2001" required/>
//           <label>Email</label>
//           <input id="regemail" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email@email.com" required/>
//           <label>Password</label>
//           <input id="regpassword" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
//           <label>Role</label>
//           <input id="role" type="text" onChange={(e) => setRole(e.target.value)} placeholder="Role" required/>

//           <a href="mailto:email@example.com">
//           <button type="submit" id="register" style={{ marginBottom: 30 }}>Register</button>
//         </a>
//         </div>
//       </div>
//     </div>
//     </form>


// </main>

//     )
//     }

// export default Register;