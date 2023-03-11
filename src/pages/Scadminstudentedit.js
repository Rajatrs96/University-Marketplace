import React, { useContext } from "react";
import { Helmet } from "react-helmet";
// import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import UserContext from "../components/UserContext";

const TITLE = "Edit business owner | " + Config["SITE TITLE"];
const DESC = "Edit business owner profile";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Scadminstudentedit() {
  // const [data,setData] = useState([]);

  // const getData = async () => {
  //   const {data} = await axios.get('http://localhost/backend_react/managestudent.php');
  //   setData(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  // const {value,setValue} = useContext(UserContext)
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/backend_file/managestudent.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
        console.log(result[1]["firstname"]);
        // setItem(result)
      });
  }, []);

  // return <div>{JSON.stringify(data)}</div>;

  //  console.log(data['userData']['lastname'])

  //  for(var i = 0;i<2;i++){
  //   data['userData'][i];
  //  }
  // console.log(data)
  // const data1 = JSON.stringify(data);
  // console.log(data1)

  // console.log(Object.values(data1));

  // console.log(Object.values(data1[0]));

  // expected output: Array ["a", "b", "c"]

  // return (
  //   <div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <td>firstname</td>
  //           <td>lastname</td>
  //           <td>dob</td>
  //           <td>phonenumber</td>
  //           <td>email</td>
  //           <td>password</td>
  //           <td>role</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {item.map((item) => (
  //           <tr key={item.id}>
  //             <td>{item.firstname}</td>
  //             <td>{item.lastname}</td>
  //             <td>{item.dob}</td>
  //             <td>{item.phonenumber}</td>
  //             <td>{item.email}</td>
  //             <td>{item.password}</td>
  //             <td>{item.role}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  // for (var key in data){
  //   if(data.hasOwnProperty(key)){
  //     console.log(key + " - " + data[key])
  //   }
  // }

  const navigate = useNavigate();
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <>
        <Link to="/schooladmin" className="sadmin-dash">
          {/* <a href="schooladmin" className="sadmin-dash"> */}
          <h1>Dashboard</h1>
        </Link>
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
                    <h3>Name: John</h3>
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
                      <b> Manage Accounts</b>
                    </h1>
                  </div>
                  <Link to="/scadminstudentedit" className="sadminbutton">
                    {/* <a className="sadminbutton" href="scadminstudentedit"> */}
                    <div>
                      <div className="sadminbutton1">Student</div>
                    </div>
                  </Link>
                  <Link to="/scadminbusinessedit" className="sadminbutton">
                    {/* <a className="sadminbutton" href="scadminbusinessedit"> */}
                    <div>
                      <div className="sadminbutton2">Business Owner</div>
                    </div>
                  </Link>
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
                                  <button
                                    className="edit"
                                    type="submit"
                                    onClick={() =>
                                      navigate("/studentdataedit")
                                    }
                                   
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td>
                                  <button className="delete">Delete</button>
                                </td>
                              </tr>
                            ))}
                            {/* <tr>
                              <td>John</td>
                              <td>1001</td>
                              <td>john@xyz</td>
                              <td>21</td>
                              <td>Male</td>
                              <td>xyz</td>
                              <td>CS</td>
                              <td>
                                <button className="edit">Edit</button>
                              </td>
                              <td>
                                <button className="delete">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>Jake</td>
                              <td>1101</td>
                              <td>jake@xyz</td>
                              <td>22</td>
                              <td>Male</td>
                              <td>xergv</td>
                              <td>CS</td>
                              <td>
                                <button className="edit">Edit</button>
                              </td>
                              <td>
                                <button className="delete">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>Christy</td>
                              <td>1106</td>
                              <td>christy@xyz</td>
                              <td>21</td>
                              <td>Female</td>
                              <td>xsgsfgrgv</td>
                              <td>ECE</td>
                              <td>
                                <button className="edit">Edit</button>
                              </td>
                              <td>
                                <button className="delete">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>Smith</td>
                              <td>2206</td>
                              <td>smith@xyz</td>
                              <td>24</td>
                              <td>Male</td>
                              <td>gsfgrgv</td>
                              <td>IT</td>
                              <td>
                                <button className="edit">Edit</button>
                              </td>
                              <td>
                                <button className="delete">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>Tom</td>
                              <td>2432</td>
                              <td>tom@xyz</td>
                              <td>22</td>
                              <td>Male</td>
                              <td>gsfgrgsfgv</td>
                              <td>CS</td>
                              <td>
                                <button className="edit">Edit</button>
                              </td>
                              <td>
                                <button className="delete">Delete</button>
                              </td>
                            </tr> */}
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
  );
}

// class Scadminstudentedit extends React.Component{
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
//                         <th className="secolumn">Student</th>
//                         <th>Student ID</th>
//                         <th>Email ID</th>
//                         <th>Age</th>
//                         <th>Gender</th>
//                         <th>Password</th>
//                         <th>Major</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                       </tr>
//                       <tr>
//                         <td>John</td>
//                         <td>1001</td>
//                         <td>john@xyz</td>
//                         <td>21</td>
//                         <td>Male</td>
//                         <td>xyz</td>
//                         <td>CS</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Jake</td>
//                         <td>1101</td>
//                         <td>jake@xyz</td>
//                         <td>22</td>
//                         <td>Male</td>
//                         <td>xergv</td>
//                         <td>CS</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Christy</td>
//                         <td>1106</td>
//                         <td>christy@xyz</td>
//                         <td>21</td>
//                         <td>Female</td>
//                         <td>xsgsfgrgv</td>
//                         <td>ECE</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Smith</td>
//                         <td>2206</td>
//                         <td>smith@xyz</td>
//                         <td>24</td>
//                         <td>Male</td>
//                         <td>gsfgrgv</td>
//                         <td>IT</td>
//                         <td>
//                           <button className="edit">Edit</button>
//                         </td>
//                         <td>
//                           <button className="delete">Delete</button>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>Tom</td>
//                         <td>2432</td>
//                         <td>tom@xyz</td>
//                         <td>22</td>
//                         <td>Male</td>
//                         <td>gsfgrgsfgv</td>
//                         <td>CS</td>
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
export default Scadminstudentedit;
