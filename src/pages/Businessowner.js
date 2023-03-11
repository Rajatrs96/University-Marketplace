import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../components/UserContext";

const TITLE = "Business owner | " + Config["SITE TITLE"];
const DESC = "Business owner logged in";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Businessowner() {
  const navigate = useNavigate();
  const { value, setValue } = useContext(UserContext);
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <div class="student-details-tab">
      <div class="businessowner-picture">
        {/* <!-- Student profile image is downloaded from https://www.kindpng.com/imgv/ibmhoob_male-student-icon-png-transparent-png/ --> */}
        <img
          src={require("../images/student-profile.png")}
          alt="studentprofile"
          width="200"
          height="200"
        />
        <h1 class="businessowner-name">
          {value.firstname} {value.lastname}
        </h1>
        {/* <p class="businessowner-profile">
            Business owner profile
        </p> */}
        <p class="businessowner-email">{value.email}</p>
        <div class="student-edit-profile1">
        <button
          onClick={() => navigate("/editbusinessownerprofile")}
          className="sadmineditbutton1"
        >
          Edit profile
        </button>
        </div>

        {/* <div className="sadminchat">
          <button
            type="submit"
            onClick={() => navigate("/sadminchat")}
            className="sAdminEditButton"
          >
            Chat
          </button>
        </div> */}
      </div>

      <div class="student-activities">
        <div>
          <h1>
            Business page
            <div class="student-activitiesbuttons">
            <button
                type="submit"
                onClick={() => navigate("/Allbpages")}
                className="student-edit-profile"
              >
                ALL PAGES
              </button>
              <button
                type="submit"
                onClick={() => navigate("/addbusiness")}
                className="student-edit-profile"
              >
                ADD
              </button>
              <button
                type="submit"
                onClick={() => navigate("/deletebusiness")}
                className="student-edit-profile"
              >
                DELETE
              </button>
            </div>
          </h1>
          {/* <!-- Business page images have been downloaded from the below links
            https://www.pexels.com/photo/photo-of-people-doing-handshakes-3183197/
            https://www.pexels.com/photo/photo-of-people-near-wooden-table-3184418/
            https://www.pexels.com/photo/man-and-woman-near-table-3184465/
         --> */}
          <div className="images-scroll">
          <img className="products-images"
            src={require("../images/business1.jpg")}
            alt="business1"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/business2.jpg")}
            alt="business2"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/business3.jpg")}
            alt="business3"
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
              <button
                type="submit"
                onClick={() => navigate("/addnewproducts")}
                className="student-edit-profile"
              >
                ADD
              </button>
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
                ALL ADVERTISEMENTS
              </button>
              <button
                type="submit"
                onClick={() => navigate("/postadvertisement")}
                className="student-edit-profile"
              >
                POST
              </button>
              <button
                type="submit"
                onClick={() => navigate("/deleteadvertisement")}
                className="student-edit-profile"
              >
                DELETE
              </button>
            </div>
          </h1>
          {/* <!-- Advertisements images have been downloaded from the below links
            https://unsplash.com/photos/TxT4F8kPHBo
            https://unsplash.com/photos/7b7wSvGn2W4
            https://unsplash.com/photos/CXjp1ycr5Vw--> */}
             <div className="images-scroll">

          <img className="products-images"
            src={require("../images/advertisement1.jpg")}
            alt="advertisement1"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/advertisement2.jpg")}
            alt="advertisement2"
            width="200"
            height="200"
          />
          <img className="products-images"
            src={require("../images/advertisement3.jpg")}
            alt="advertisement3"
            width="200"
            height="200"
          />
          </div>
        </div>

        <div>
          <h1>
            Orders
            <div class="student-activitiesbuttons">
              <button
                type="submit"
                onClick={() => navigate("/cancelorders")}
                className="student-edit-profile"
              >
                CANCEL
              </button>
            </div>
          </h1>
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
      </div>
    </main>
  );
}
export default Businessowner;
