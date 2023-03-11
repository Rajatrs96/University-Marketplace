import React from "react";
import { Helmet } from "react-helmet";
// import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";

const TITLE = "School admin detail | " + Config["SITE TITLE"];
const DESC = "School admin details page";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Sadmindetailedit() {
  const navigate = useNavigate();
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <form>
        <h1 className="editprofile-heading">Edit your profile</h1>
        <ul className="editprofile-title">
          <li>
            <label htmlFor="profile-name">Name</label>
            <input
              className="editprofile-input"
              type="text"
              id="profile-name"
              placeholder="Enter your name"
              required=""
            />
          </li>
          <li>
            <label htmlFor="profile-email">Email</label>
            <input
              className="editprofile-input"
              type="text"
              id="profile-email"
              placeholder="Enter your email"
              required=""
            />
          </li>
          <li>
            <label htmlFor="Number">Number</label>
            <input
              className="editprofile-input"
              type="text"
              id="profile-email"
              placeholder="Enter your number"
              required=""
            />
          </li>
          <li>
            <button type="submit">CONFIRM</button>
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

// class Sadmindetailedit extends React.Component{
// render()
// {
//     return(
//         <main>
//              <Helmet>
//             <title>
//                 {TITLE}
//             </title>
//             <link rel = "canonical" href={CANONICAL} />
//             <meta name="description" content={DESC} />

//         </Helmet>
//         <form>
//   <h1 className="editprofile-heading">Edit your profile</h1>
//   <ul className="editprofile-title">
//     <li>
//       <label htmlFor="profile-name">Name</label>
//       <input
//         className="editprofile-input"
//         type="text"
//         id="profile-name"
//         placeholder="Enter your name"
//         required=""
//       />
//     </li>
//     <li>
//       <label htmlFor="profile-email">Email</label>
//       <input
//         className="editprofile-input"
//         type="text"
//         id="profile-email"
//         placeholder="Enter your email"
//         required=""
//       />
//     </li>
//     <li>
//       <label htmlFor="Number">Number</label>
//       <input
//         className="editprofile-input"
//         type="text"
//         id="profile-email"
//         placeholder="Enter your number"
//         required=""
//       />
//     </li>
//     <li>
//       <button
//         type="submit"
//         onclick="return confirm('Are you sure you want to submit?')"
//       >
//         CONFIRM
//       </button>
//     </li>
//     <li>
//       <input
//         className="back-button"
//         type="button"
//         defaultValue="Back"
//         onclick="history.back()"
//       />
//     </li>
//   </ul>
// </form>

// </main>

//     )
//     }
// }
export default Sadmindetailedit;
