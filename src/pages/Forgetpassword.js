import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
// import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Config from "../Config.json";
const TITLE = "Forget password | " + Config["SITE TITLE"]
const DESC = "Forget password page"
const CANONICAL = Config.SITE_DOMAIN + "/";


function Forgetpassword(){  

  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const forgetHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",email:email}
    
    try {
        await axios
          .post('http://localhost/backend_react/forgetpassword.php', config)
          .then((response) => {
            // debugger
            console.log(response.data)
            setSuccess('Your password has been sent successfully to your email address!')

          })
          .catch((error) => {
            console.log('no authorization', error)
            setError('Invalid email address.')
            setSuccess(null)
          })
      } catch (error) {
        setTimeout(() => {
          setError('Invalid credentials...')
          setSuccess(null)
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
        <div className="cartItems-section">
  <form onSubmit={forgetHandle} method='post' >
    <p>Email*</p>
    <input type="email" onChange={(e) => setEmail(e.target.value)} /> <br />
    <br />
    <button>submit</button>
    {success ? (<div className="success-message">{success}</div>): (<div className="error-message">{error} </div>)}
  </form>
</div>

        
</main>

    )
    }

export default Forgetpassword;