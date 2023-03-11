import axios from "axios";
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";
import Config from "../Config.json";
import { useEffect } from "react";


const TITLE = "School admin chat window | " + Config["SITE TITLE"]
const DESC = "School admin chat window page"
const CANONICAL = Config.SITE_DOMAIN + "/";


function Sadminchatwindow(){
  const [item, setItem] = useState([]);
  const [chat, setchat] = useState('')

  const [error, setError] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost/backend_file/chat.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
        console.log(result["sname"]);
        // setItem(result)
      });
  }, []);
  const registerHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",chat:chat}
    
    try {
      const { data } = await axios
        .post('http://localhost/backend_file/chat.php', config)
        .then((response) => {
          //console.log(response.data)
          navigate('/sadminchatwindow')
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
<div>
        {item.map((item) => (
          <p>{item.message}</p>
        ))}
      </div>
<form onSubmit={registerHandle} method='post' className="sadmin-form">
    <div className="chatprofile-contents">
      <h1 className="chatprofile-heading">Chat</h1>
      
      <div>
        <input type="text" className="sadmin-namewindow" onChange={(e) => setchat(e.target.value)}/>
      </div>
      <a href="sadminchatwindow" id="chat-submit">
        <div>
          <button className="sadminchatwindow-submit">Send Message</button>
        </div>
      </a>
      {/* <button className="sadminchatwindow-submit1" type="submit"
          onClick={() => navigate(-2)}
      >
          End
      </button> */}
    </div>
  </form>     
</main>

  );
}

export default Sadminchatwindow;