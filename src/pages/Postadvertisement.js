import axios from "axios";
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";


const TITLE = "Post advertisement | " + Config["SITE TITLE"]
const DESC = "Post an advertisement "
const CANONICAL = Config.SITE_DOMAIN + "/";

function Postadvertisement(){
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const postadvertisement = async (e) => {
    e.preventDefault()
    let config = {method:"POST",title:title,description:description}
    
    try {
      const { data } = await axios
        .post('http://localhost/backend_react/postadv.php', config)
        .then((response) => {
          //console.log(response.data)
          navigate('/Alladv')
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

  
    return (
    <main>
        <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
        </Helmet>
        <form onSubmit={postadvertisement} method='post'>
  <h1 className="postadvertisement-heading">Post your advertisement</h1>
  <ul className="postadvertisement-title">
    <li>
      <label htmlFor="advertisement-name">Title</label>
      <input
        className="postadvertisement-input"
        type="text"
        onChange={(e) => settitle(e.target.value)}
        id="advertisement-name"
        placeholder="Enter your title"
        required=""
      />
    </li>
    <li>
      <label htmlFor="advertisement-description">Description</label>
      <input
        className="postadvertisement-input"
        type="text"
        onChange={(e) => setdescription(e.target.value)}
        id="advertisement-description"
        placeholder="Enter your description"
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
    );
}


export default Postadvertisement;