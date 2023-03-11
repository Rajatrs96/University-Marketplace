import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { Bar } from "react-chartjs-2";
import UserContext from "../components/UserContext";
import { useState, useContext } from "react";
import Barchart from "./Barchart";

const TITLE = "Superadmin | " + Config["SITE TITLE"];
const DESC = "Superadmin logged in";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Superadmin() {
  const { value, setValue } = useContext(UserContext);
  const navigate = useNavigate();
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>

      <h1 className="dashboard">Dashboard</h1>
      <section id="sAdminSection">
        <div id="r">
          <div id="c">
            <div className="sadmindet">
              <div className="sadmindet1">
                <div className="sadmin">
                  <h1>
                    <b>Admin Details</b>
                  </h1>
                </div>
                <div className="sadminicon">
                  <div>
                    <i className="fa-sharp fa-solid fa-user-tie fa-4x" />
                  </div>
                </div>
                <div>
                  <h3>Name: {value.firstname} {value.lastname}</h3>
                </div>
                <div>
                  <h3>Email: {value.email}</h3>
                </div>
                <div>
                  <h3>Number: {value.phonenumber}</h3>
                </div>
                <div className="sadmineditbutton">
                  <button
                    type="submit"
                    
                    onClick={() => navigate("/sadmindetailedit")}
                    id="sAdminEditButton"
                  >
                    Edit Details
                  </button>
                  </div>
                  <div>
                  <a className="sadmineditbutton" href="http://localhost/ChatApp/index.php" target="_blank" rel="noopener noreferrer">
                <button
                  type="submit"
               
                  // onClick={() => navigate("/sadminchat")}
                  id="sAdminEditButton"
                >
                  Chat
                  
                </button>
                </a>

                </div>
                
              </div>
            </div>
          </div>
          <div id="c">
            <div className="sadmindet">
              <div className="sadmindet2">
                <div className="sadminmanage">
                  <h1>
                    <b> Manage Account Types</b>
                  </h1>
                </div>
                <Link className="sadminbutton" to="/Studentedit" style={{ textDecoration: "none" }}>
                {/* <a className="sadminbutton" href="Studentedit"> */}
                  <div>
                    <div className="sadminbutton1">Student</div>
                  </div>
                  </Link>
                  <Link className="sadminbutton" to="/Businessedit" style={{ textDecoration: "none" }}>

                
                {/* <a className="sadminbutton" href="scadminbusinessedit"> */}
                  <div>
                    <div className="sadminbutton2">Business Owner</div>
                  </div>
                  </Link>
                  <Link className="sadminbutton" to="/schooladminedit" style={{ textDecoration: "none" }}>

                {/* <a className="sadminbutton" href="schooladminedit"> */}
                  <div>
                    <div className="sadminbutton2">School Admin</div>
                  </div>
                </Link>
                {/* <div class="sadminbutton">
          <div class="sadminbutton2">Business Owner</div>
        </div> */}
                {/* <div class="sadminbutton">
          <div class="sadminbutton3">School Admins</div>
        </div> */}
              </div>
            </div>
          </div>
          <div id="c">
            <div className="sadmindetlast">
              <div className="sadmincharts">
                <div className="sadmintables">
                  <h1>
                    <b>Data Representation</b>
                  </h1>
                </div>
                <br></br>
                <Barchart />
                <div className="Chart">
                  {/* <canvas id="myChart" width={100} height={100} /> */}
                  {/* <img
                  id="myChart"
                    src={require("../images/Pie-chart.jpeg")}
                    alt="profile"
                    width="43%"
                    height="50%"
                  />

                  <img id="myChart"
                    src={require("../images/3-Donut-Chart.png")}
                    alt="profile"
                    width="40%"
                    height="40%"
                  /> */}
             
                            {/* <div class="chart1"></div> */}
{/* 
                            <ul class="key">
                              <li>
                                <strong class="percent red">10</strong>
                                <span class="choice">Bottle</span>
                              </li>
                              <li>
                                <strong class="percent gray">10</strong>
                                <span class="choice">Earphones</span>
                              </li>
                              <li>
                                <strong class="percent purple">100</strong>
                                <span class="choice">LAPTOP</span>
                              </li>
                            </ul> */}
            
                </div>
              </div>
              {/* <div className="sadminchat">
                <button
                  type="submit"
                  onClick={() => navigate("/sadminchat")}
                  id="sAdminEditButton"
                >
                  Chat
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// class Superadmin extends React.Component{

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
//         <>
//   <h1>Dashboard</h1>
//   <section id="sAdminSection">
//     <div id="r">
//       <div id="c">
//         <div className="sadmindet">
//           <div className="sadmindet1">
//             <div className="sadmin">
//               <h1>
//                 <b>Admin Details</b>
//               </h1>
//             </div>
//             <div className="sadminicon">
//               <div>
//                 <i className="fa-sharp fa-solid fa-user-tie fa-4x" />
//               </div>
//             </div>
//             <div>
//               <h3>Name: John Smith</h3>
//             </div>
//             <div>
//               <h3>Email: john@sadmin.edu</h3>
//             </div>
//             <div>
//               <h3>Telephone: 6823408026</h3>
//             </div>
//             <div className="sadmineditbutton">
//               <button
//                 type="submit"
//                 onClick={() => navigate('/sadmindetailedit')}
//                 id="sAdminEditButton"
//               >
//                 Edit Details
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="c">
//         <div className="sadmindet">
//           <div className="sadmindet2">
//             <div className="sadminmanage">
//               <h1>
//                 <b> Manage Account Types</b>
//               </h1>
//             </div>
//             <a className="sadminbutton" href="studentEdit.html">
//               <div>
//                 <div className="sadminbutton1">Student</div>
//               </div>
//             </a>
//             <a className="sadminbutton" href="businessEdit.html">
//               <div>
//                 <div className="sadminbutton2">Business Owner</div>
//               </div>
//             </a>
//             <a className="sadminbutton" href="schoolAdminEdit.html">
//               <div>
//                 <div className="sadminbutton2">School Admin</div>
//               </div>
//             </a>
//             {/* <div class="sadminbutton">
//           <div class="sadminbutton2">Business Owner</div>
//         </div> */}
//             {/* <div class="sadminbutton">
//           <div class="sadminbutton3">School Admins</div>
//         </div> */}
//           </div>
//         </div>
//       </div>
//       <div id="c">
//         <div className="sadmindet">
//           <div className="sadmincharts">
//             <div className="sadmintables">
//               <h1>
//                 <b>Data Representation</b>
//               </h1>
//             </div>
//             <div className="Chart">
//               <canvas id="myChart" width={100} height={100} />
//               <canvas id="myChart1" width={100} height={100} />
//             </div>
//           </div>
//           <div className="sadminchat">
//             <button
//               type="submit"
//               onclick="location.href='sadmin_chat.html'"
//               id="sAdminEditButton"
//             >
//               Chat
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

// http://localhost/ChatApp%20-%20CodingNepal/index.php

// http://localhost:3000/ChatApp%20-%20CodingNepal/index.php
// </>

// </main>

//     )
//     }
// }
export default Superadmin;
