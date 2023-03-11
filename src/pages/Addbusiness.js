import axios from "axios";
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";

import Config from "../Config.json";
const TITLE = "Add business | " + Config["SITE TITLE"]
const DESC = "Add business page"
const CANONICAL = Config.SITE_DOMAIN + "/";


function Addbusiness(){
  const [bname, setbname] = useState('')
  const [description, setdescription] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  
  const Addbusinesspage = async (e) => {
    e.preventDefault()
    let config = {method:"POST",bname:bname,description:description}
    
    try {
      const { data } = await axios
        .post('http://localhost/backend_react/addbp.php', config)
        .then((response) => {
          //console.log(response.data)
          navigate('/Allbpages')
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
        <form onSubmit={Addbusinesspage} method='post'>
  <h1 className="addbusiness-heading">Add your business</h1>
  <ul className="addbusiness-title">
    <li>
      <label htmlFor="business-name">Business name</label>
      <input
        className="addbusiness-input"
        type="text"
        onChange={(e) => setbname(e.target.value)}
        id="business-name"
        placeholder="Enter your business name"
        required=""
      />
    </li>
    <li>
      <label htmlFor="business-description">Description</label>
      <input
        className="addbusiness-input"
        type="text"
        onChange={(e) => setdescription(e.target.value)}
        id="business-description"
        placeholder="Enter your business description"
        required=""
      />
    </li>
    <li>
      <button
        type="submit"
        onclick="return confirm('Are you sure you want to submit?')"
      >
        SUBMIT
      </button>
    </li>
    <li>
      <input
        className="back-buttonadd"
        type="button"
        defaultValue="Back"
        onClick={() => navigate(-1)}
      />
    </li>
  </ul>
</form>

        
</main>

    )
    }

export default Addbusiness;