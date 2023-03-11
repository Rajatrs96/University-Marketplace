import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../components/UserContext";
import { Link } from "react-router-dom";
import Barchart from "./Barchart";

const TITLE = "School admine | " + Config["SITE TITLE"];
const DESC = "School admin logged in";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Schooladmin() {
  const { value, setValue } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <>
        <a href="schooladmin" className="sadmin-dash">
          <h1 className="dashboard">Dashboard</h1>
        </a>
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
                  <div>{/* <h3>Name: {value.firstname}</h3> */}</div>
                  <div>
                    <h3>
                      Name: {value.firstname} {value.lastname}
                    </h3>
                  </div>
                  <div>
                    <h3>Email: {value.email}</h3>
                  </div>
                  <div>
                    <h3>Telephone: {value.phonenumber}</h3>
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
                </div>
              </div>
            </div>
            <div id="c">
              <div className="sadmindet">
                <div className="sadmindet2">
                  <div className="sadminmanage">
                    <h1>
                      <b> Manage Account</b>
                    </h1>
                  </div>
                  <Link
                    className="sadminbutton"
                    to="/Studentedit"
                    style={{ textDecoration: "none" }}
                  >
                    {/* <a className="sadminbutton" href="scadminstudentedit"> */}

                    <div className="sadminbutton1">Student</div>
                  </Link>
                  <Link
                    className="sadminbutton"
                    to="/Businessedit"
                    style={{ textDecoration: "none" }}
                  >
                    {/* <a className="sadminbutton" href="scadminbusinessedit"> */}
                    <div>
                      <div className="sadminbutton2">Business Owner</div>
                    </div>
                  </Link>
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
                  {/* <table className="table1">
                    <thead>
                      <tr>
                        <th> */}
                  <br></br>
                  <Barchart />
                  <div className="Chart">
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
                  {/* </th> */}
                  {/* <th>

                           <div className="Chart">
                            <div class="chart1"></div>

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
                            </ul>
                          </div> 
                        </th>  */}
                  {/* </tr> */}
                  {/* </thead>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </main>
  );
}

export default Schooladmin;
// class Schooladmin extends React.Component{
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
//   <a href="schooladmin.html" className="sadmin-dash">
//     <h1>Dashboard</h1>
//   </a>
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
//                 onclick="location.href='sadmin_detial_edit.html'"
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
//                 <b> Manage Account</b>
//               </h1>
//             </div>
//             <a className="sadminbutton" href="scadminstudentedit">
//               <div>
//                 <div className="sadminbutton1">Student</div>
//               </div>
//             </a>
//             <a className="sadminbutton" href="scadminbusinessedit">
//               <div>
//                 <div className="sadminbutton2">Business Owner</div>
//               </div>
//             </a>
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
//         </div>
//       </div>
//     </div>
//   </section>
// </>

// </main>

//     )
// }
// }
