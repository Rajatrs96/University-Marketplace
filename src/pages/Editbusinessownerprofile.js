import React from "react";
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";

import Config from "../Config.json";
const TITLE = "Edit business owner | " + Config["SITE TITLE"]
const DESC = "Edit business owner profile"
const CANONICAL = Config.SITE_DOMAIN + "/";


function Editbusinessownerprofile(){
  const navigate = useNavigate();
  
    return(
        <main>
             <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
            
        </Helmet>
        <form>
  <h1 className="editbusinessownerprofile-heading">Edit your profile</h1>
  <ul className="editbusinessownerprofile-title">
    <li>
      <label htmlFor="profile-name">Name</label>
      <input
        className="editbusinessownerprofile-input"
        type="text"
        id="profile-name"
        placeholder="Enter your name"
        required=""
      />
    </li>
    <li>
      <label htmlFor="profile-major">Profile</label>
      <input
        className="editbusinessownerprofile-input"
        type="text"
        id="profile-major"
        placeholder="Enter your profile"
        required=""
      />
    </li>
    <li>
      <label htmlFor="profile-email">Email</label>
      <input
        className="editbusinessownerprofile-input"
        type="text"
        id="profile-email"
        placeholder="Enter your email"
        required=""
      />
    </li>
    <li>
      <button
        type="submit"
        onclick="return confirm('Are you sure you want to submit?')"
      >
        CONFIRM
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

export default Editbusinessownerprofile;