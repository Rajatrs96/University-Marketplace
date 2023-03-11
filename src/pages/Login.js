import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import axios from 'axios';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../components/UserContext";


const TITLE = "Login | " + Config["SITE TITLE"]
const DESC = "Logged in"
const CANONICAL = Config.SITE_DOMAIN + "/";



function Login(){

  const [email, setUserid] = useState('')
  const [pass, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')
  const { value, setValue } = useContext(UserContext)
  const [isLoggedin, setLogin] = useState(false)
  const navigate = useNavigate()

  const loginHandle = async (e) => {
    e.preventDefault()
    let config = { method: 'POST', email: email, password: pass }

    try {
      await axios
        .post('http://localhost/backend_file/login.php', config)
        .then((response) => {
          // debugger
          console.log("Response Data: ",response.data)
           
          setLogin(true)
          if (Object.keys(response.data.userData).length > 0) {
            let obj = {...response.data.userData}
            obj = {...obj, isLogged: isLoggedin}
            setValue(obj)
            // navigate('/student')
            console.log("Obj: ",obj)

            
            // Navigate to respective pages based on roles
            if(response.data.userData.role == 'student')
            {
              navigate('/student')
            }
            else if(response.data.userData.role == 'businessowner')
            {
              navigate('/businessowner')
            }
            else if(response.data.userData.role == 'schooladmin')
            {
              navigate('/schooladmin')
            }
            else if(response.data.userData.role == 'superadmin')
            {
              navigate('/superadmin')
            }



          }

          // if (Object.keys(response.data.error).length > 0) {
          //   setError('Invalid credentials...')
            
          // }


        })
        .catch((error) => {
          console.log('no authorization', error)
          setError('Invalid username or password')
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
    {/* <div id="loginheading">
      <h1>Choose the user</h1>
    </div>
    <section>
      <div id="row">
        <div id="column">
          <Link to="/student" style={{ textDecoration: "none" }}>
            <div className="logincard">
              <div className="studentcontain">
                <h3>
                  <b>Student</b>
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div id="column">
          <Link to="/businessowner" style={{ textDecoration: "none" }}>
            <div className="logincard">
              <div className="officecontain">
                <h3>
                  <b>Business Owner</b>
                </h3>
              </div>
            </div>
            </Link>
          
        </div>
        <div id="column">
          <Link to="/schooladmin" style={{ textDecoration: "none" }}>
            <div className="logincard">
              <div className="schoolcontain">
                <h3>
                  <b>School Admin</b>
                </h3>
              </div>
            </div>
            </Link>
        </div>
        <div id="column">
          <Link to="/superadmin" style={{ textDecoration: "none" }}>
            <div className="logincard">
              <div className="supercontain">
                <h3>
                  <b>Super Admin</b>
                </h3>
              </div>
            </div>
            </Link>
        </div>
        <a href="SuperAdmin" style={{ textDecoration: "none" }}> </a>
      </div>
    </section> */}

    
    <section>
    <form onSubmit={loginHandle} method='post'>
      <div id="logincontainer">
        <div className="credentials">
          <div className="reg-details">
            <h1>Log In</h1>
            <label>User Id</label>
            <input id="firstname" type="email" placeholder="John" name="email" onChange={(e) => setUserid(e.target.value)}
            required />
            <label>Password</label>
            <input
              id="regpassword"
              type="password"
              placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}
              required/>
            <button type="submit" id="register">
              Login
            </button>
            



            {/* <a href="ForgetPassword"
              className="active"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "5px 5px 0 0"
              }}> */}
  
             <Link to="/forgetpassword" className="active"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "5px 5px 0 0"
              }}>
  
              {" "}
              ForgotPassword
            </Link>
            <div className="error-message">
              {error}
            </div>
          </div>
        </div>
      </div>
      </form>
    </section>
  </main>
  
      );
  
  }
  export default Login;
