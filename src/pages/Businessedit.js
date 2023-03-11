import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { Link } from 'react-router-dom';
import { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../components/UserContext";


const TITLE = "Business edit | " + Config["SITE TITLE"];
const DESC = "Business edit logged in";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Businessedit() {
  const { value, setValue } = useContext(UserContext);
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
  
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>

      <>
      <Link to="/superadmin" className="sadmin-dash">
  {/* <a href="SuperAdmin.html" className="sadmin-dash"> */}
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
          </div>
        </div>
      </div>
      {/* <div id="c">
        <div className="sadmindet">
          <div className="sadmindet2">
            <div className="sadminmanage">
              <h1>
                <b> Manage Accounts</b>
              </h1>
            </div>
            <Link to="/studentedit" className="sadminbutton">

              <div>
                <div className="sadminbutton1">Student</div>
              </div>
              </Link>
              <Link to="/businessedit" className="sadminbutton" >

              <div>
                <div className="sadminbutton2">Business Owner</div>
              </div>
            </Link>
            <Link to="/schooladminedit" className="sadminbutton" >

              <div>
                <div className="sadminbutton3">School Admins</div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
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
                                <button className="edit" onClick={() => navigate("/studentdataedit")}>Edit</button>
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
  );
}

export default Businessedit;
