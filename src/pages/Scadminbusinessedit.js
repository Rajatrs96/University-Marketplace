// import dom from "dom";
import React from "react";
import {Helmet} from "react-helmet";
// import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Config from "../Config.json";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";

const TITLE = "Cancel orders | " + Config["SITE TITLE"]
const DESC = "Cancel orders page"
const CANONICAL = Config.SITE_DOMAIN + "/";

function Scadminbusinessedit(){
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/backend_file/managebusinessowner.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
        console.log(result[1]["firstname"]);
        // setItem(result)
      });
  }, []);

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
        <>
  <a href="schooladmin" className="sadmin-dash">
    <h1>Dashboard</h1>
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
            <div>
              <h3>Name: John Smith</h3>
            </div>
            <div>
              <h3>Email: john@sadmin.edu</h3>
            </div>
            <div>
              <h3>Number: 6823408026</h3>
            </div>
            <div className="sadmineditbutton">
              <button
                type="submit"
                onClick={() => navigate('/sadmindetailedit')}
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
                <b> Manage Accounts</b>
              </h1>
            </div>
            <a className="sadminbutton" href="scadminstudentedit">
              <div>
                <div className="sadminbutton1">Student</div>
              </div>
            </a>
            <a className="sadminbutton" href="scadminbusinessedit">
              <div>
                <div className="sadminbutton2">Business Owner</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="c">
        <div className="sadmindet">
          <div className="sadmintables">
            <h1>
              <b>Data</b>
            </h1>
            <div>
              <section>
                <div className="table-outline">
                  <table className="table">
                    <tbody>
                    <tr className="serow">
                              {/* <th className="secolumn">Student</th> */}
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Date of Birth</th>
                              <th>Phone number</th>
                              <th>Email</th>
                              <th>Password</th>
                              <th>Role</th>
                              <th>Edit</th>
                              <th>Delete</th>  
                            </tr>
                            {item.map((item) => (
                              <tr key={item.id}>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.dob}</td>
                                <td>{item.phonenumber}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.role}</td>
                                <td>
                                <button className="edit">Edit</button>
                              </td>
                              <td>
                                <button className="delete">Delete</button>
                              </td>
                              </tr>
                              
                            ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

        
        
</main>

  )
}
// class Scadminbusinessedit extends React.Component{
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
//               <h3>Number: 6823408026</h3>
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
//                 <b> Manage Accounts</b>
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
//           <div className="sadmintables">
//             <h1>
//               <b>Data</b>
//             </h1>
//             <div>
//               <section>
//                 <div className="table-outline">
//                   <table className="table">
//                     <tbody>
//                       <tr className="serow">
//                         <th className="secolumn">First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone Number</th>
//                         <th>EmpID</th>
//                         <th>Email ID</th>
//                         <th>Password</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                       </tr>
//                       <tr>
//                         <td>John</td>
//                         <td>Smith</td>
//                         <td>2123453891</td>
//                         <td>2001</td>
//                         <td>john@xyz</td>
//                         <td>xyz</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Tom</td>
//                         <td>Hardy</td>
//                         <td>2123453834</td>
//                         <td>2005</td>
//                         <td>tom@xyz</td>
//                         <td>xyz</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Bradley</td>
//                         <td>Cooper</td>
//                         <td>3453453834</td>
//                         <td>2001</td>
//                         <td>bradley@xyz</td>
//                         <td>xyzwerfjon</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Chris</td>
//                         <td>Brown</td>
//                         <td>1233453834</td>
//                         <td>2008</td>
//                         <td>chris@xyz</td>
//                         <td>zwerfjon</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </>

        
        
// </main>

//     )
//     }
// }
export default Scadminbusinessedit;