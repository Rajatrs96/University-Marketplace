import axios from "axios";
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";


const TITLE = "Add club | " + Config["SITE TITLE"]
const DESC = "Add a club "
const CANONICAL = Config.SITE_DOMAIN + "/";

function Addclub(){
  const [clubname, setclubname] = useState('')
  const [description, setdescription] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  
  const Addclub = async (e) => {
    e.preventDefault()
    let config = {method:"POST",clubname:clubname,description:description}
    
    try {
      const { data } = await axios
        .post('http://localhost/backend_file/addclub.php', config)
        .then((response) => {
          //console.log(response.data)
          navigate('/student')
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
        <form onSubmit={Addclub} method='post'>
  <h1 className="addclub-heading">Add your club</h1>
  <ul className="addclub-title">
    <li>
      <label htmlFor="club-name">Club name</label>
      <input
        className="addclub-input"
        type="text"
        onChange={(e) => setclubname(e.target.value)}
        id="club-name"
        placeholder="Enter your club name"
        required
      />
    </li>
    <li>
      <label htmlFor="club-description">Description</label>
      <input
        className="addclub-input"
        type="text"
        id="club-description"
        onChange={(e) => setdescription(e.target.value)}
        placeholder="Enter your club description"
        required
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

export default Addclub;