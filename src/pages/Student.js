import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../components/UserContext";

const TITLE = "Student | " + Config["SITE TITLE"];
const DESC = "Student login";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Student() {
  const { value, setValue } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <div class="student-details-tab">
      <div class="student-picture">
        {/* <!-- Student profile image is downloaded from https://www.kindpng.com/imgv/ibmhoob_male-student-icon-png-transparent-png/ --> */}
        <img
          src={require("../images/student-profile.png")}
          alt="profile"
          width="200"
          height="200"
        />
        {/* <h1 class="student-name">Student name</h1> */}
        
        <h1 class="student-name"> Student Name -  
           {value.firstname} {value.lastname}
        </h1>
        <h2 class="student-email">Email - {value.email}</h2>
        <h2 class="student-email">Phone Number - {value.phonenumber}</h2>
        <div class="student-edit-profile1">
        <button
          onClick={() => navigate("/editprofile")}
          className="sadmineditbutton1"
        >
          Edit profile
        </button>
        </div>

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
      

      <div class="student-activities">
        <div>
          <h1>
            Clubs
            <div class="student-activitiesbuttons">
              <button
                type="submit"
                onClick={() => navigate("/joinclub")}
                className="student-edit-profile"
              >
                JOIN
              </button>

              <button
                type="submit"
                onClick={() => navigate("/leaveclub")}
                className="student-edit-profile"
              >
                LEAVE
              </button>

              <button
                type="submit"
                onClick={() => navigate("/addclub")}
                className="student-edit-profile"
              >
                ADD
              </button>
              <button
                type="submit"
                onClick={() => navigate("/deleteclub")}
                className="student-edit-profile"
              >
                DELETE
              </button>
            </div>
          </h1>
          <div className="images-scroll">
          <img className="products-images"
            src={require("../images/art.jpg")}
            alt=""
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/sportclub.jpg")}
            alt=""
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/scienceclub.jpg")}
            alt=""
            width="200"
            height="200"
          />
           <img className="products-images"
            src={require("../images/art.jpg")}
            alt=""
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/sportclub.jpg")}
            alt=""
            width="200"
            height="200"
          />
          </div>
        </div>
        <div>
          <h1>
            Products
            <div class="student-activitiesbuttons">
              <button
                type="submit"
                onClick={() => navigate("/items")}
                className="student-edit-profile"
              >
                BUY
              </button>
              <button
                type="submit"
                onClick={() => navigate("/returnproducts")}
                className="student-edit-profile"
              >
                RETURN
              </button>
              {/* <button
                type="submit"
                onClick={() => navigate("/addnewproducts")}
                className="student-edit-profile"
              >
                ADD
              </button> */}
              <button
                type="submit"
                onClick={() => navigate("/removeproducts")}
                className="student-edit-profile"
              >
                REMOVE
              </button>
            </div>
          </h1>
          <div className="images-scroll">
          <img className="products-images"
            src={require("../images/waterbottle.jpg")}
            alt="waterbottle"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/shoe.jpg")}
            alt="shoe"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/watch.jpg")}
            alt="watch"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/waterbottle.jpg")}
            alt="waterbottle"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/shoe.jpg")}
            alt="shoe"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/watch.jpg")}
            alt="watch"
            width="200"
            height="200"
          />
          </div>
        </div>
        <div>
          <h1>
            Advertisements
            <div class="student-activitiesbuttons">
              <button
                type="submit"
                onClick={() => navigate("/Alladv")}
                className="student-edit-profile"
              >
                ADVERTISEMENTS
              </button>
              {/* <button
                type="submit"
                onClick={() => navigate("/postadvertisement")}
                className="student-edit-profile"
              >
                POST
              </button> */}
              {/* <button
                type="submit"
                onClick={() => navigate("/deleteadvertisement")}
                className="student-edit-profile"
              >
                DELETE
              </button> */}
            </div>
          </h1>
          <div className="images-scroll">
          <img className="products-images"
            src={require("../images/advertisement1.jpg")}
            alt="advertisement1"
            width={200}
            height={200}
          />
          <img className="products-images"
            src={require("../images/advertisement2.jpg")}
            alt="advertisement2"
            width={200}
            height={200}
          />
          <img className="products-images"
            src={require("../images/advertisement3.jpg")}
            alt="advertisement3"
            width={200}
            height={200}
          />
          <img className="products-images"
            src={require("../images/advertisement1.jpg")}
            alt="advertisement1"
            width={200}
            height={200}
          />
          <img className="products-images"
            src={require("../images/advertisement2.jpg")}
            alt="advertisement2"
            width={200}
            height={200}
          />
          <img className="products-images"
            src={require("../images/advertisement3.jpg")}
            alt="advertisement3"
            width={200}
            height={200}
          />
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
export default Student;
