import axios from "axios";
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";

const TITLE = "Contact | " + Config["SITE TITLE"]
const DESC = "Contact us"
const CANONICAL = Config.SITE_DOMAIN + "/";

function Contact(){
  const [name, setName] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const contactHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",name:name,phonenumber:phonenumber,email:email,message:message}
    
    try {
      const { data } = await axios
        .post('http://localhost/backend_react/contactus.php', config)
        .then((response) => {
          
        //   navigate('/login')
        setError('Email has been sent successfully. Thank you for contacting us.')
        })
        .catch((error) => {
          console.log(error)
        //   setError('1Email sending unsuccessful. Please try again after sometime.')
        })
    } catch (error) {
      setTimeout(() => {
        // setError('2Email sending unsuccessful. Please try again after sometime.')
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
        <div class="form-outline">
        <div class="form-box">
            <form onSubmit={contactHandle} method='post' class="form-input">
                <h1>Contact Us</h1><br />
                <input type="text" pattern="[a-zA-Z ]+" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required/><br />
                <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required/><br />
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={(e) => setPhoneNumber(e.target.value)} required/><br />
                <input type="text" placeholder="Enter your message here" onChange={(e) => setMessage(e.target.value)} required/><br />
                <button>Submit</button>
                <div className="success-message">{error}</div>
            </form>
        </div>
    </div>
    </main>
    )

}
export default Contact;