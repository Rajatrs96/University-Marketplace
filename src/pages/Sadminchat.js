import axios from "axios";
import React from "react";
import {Helmet} from "react-helmet";
// import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import UserContext from "../components/UserContext";
import { useState, useContext } from "react";

const TITLE = "School admin chat | " + Config["SITE TITLE"]
const DESC = "School admin chat page"
const CANONICAL = Config.SITE_DOMAIN + "/";




function Sadminchat()
{
  const { value, setValue } = useContext(UserContext);
  const [firstname, setFirstName] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const sadminchatwindow = async (e) => {
    e.preventDefault()
    let config = {method:"POST",firstname:firstname}
    
    try {
      const { data } = await axios
        .post('http://localhost/backend_file1/chat.php', config)
        .then((response) => {
          console.log(response.data)
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
        <>

        <form onSubmit={sadminchatwindow} method='post' className="sadmin-form">
    <div className="chatprofile-contents">
      <h1 className="chatprofile-heading">Enter your name</h1>
      <div>
        <input
          type="text"
          className="sadmin-name"
          placeholder="Enter your name"
          onChange={(e) => setFirstName(e.target.value)}
          id="chat"
        />
      </div>

      {/* <Link to="/sadminchatwindow" id="chat-submit"> */}

      {/* <a href="sadminchatwindow" id="chat-submit"> */}
        <div>
          <button className="sadminchat-submit">Submit</button>
        </div>
        {/* </Link> */}
    </div>
  </form>
</>

        
        
</main>

    )
    }

export default Sadminchat;






  {/* <form>
<h1 class="editprofile-heading">Enter your Name</h1>
<ul class="editprofile-title">
  <li>
    <label for="profile-name"> Name </label>
    <input
      class="editprofile-input"
      type="text"
      id="profile-name"
      placeholder="Enter your name"
    />
  </li>
  <li>
    <a href="sadmin_chat_window.html" id="chat-submit"> 
      <div>
          <h2  class="sadminchat-submit">Submit</h2>
      </div>
    </a>
  </li>
  <li>
    <input
      class="back-button"
      type="button"
      value="Back"
      onclick="history.back()"
    />
  </li>
</ul>




    </form> */}
