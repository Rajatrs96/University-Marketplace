import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TITLE = "Items | " + Config["SITE TITLE"];
const DESC = "Items ";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Leaveclub() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/backend_file/displayleaveclub.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);

        // setItem(result)
      });
  }, []);

  const deleteRow = async (clubname) => {
    let config = { method: "POST", clubname:clubname}

    axios.post('http://localhost/backend_file/leaveclub.php', config)
        .then((response) => {
          // console.log(response.data)
          window.location.reload(true);

                })
        .catch((error) => {
          console.log(error)
        })
    }

  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <>
        <h1 className="products-heading">Leave Club</h1>
        <div className="cartItems-section">
          {item.map((item) => (
            <div className="card">
              <div className="card_img_holder">
                <img
                  src="https://www.css.edu/wp-content/uploads/Community-participation-in-college.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <p>{item.clubname}</p>
                <p>{item.description}</p>
                <button onClick={() => deleteRow(item.clubname)}>Leave this club</button>
              </div>
            </div>
          ))}
        </div>
      </>
    </main>
  );
}

export default Leaveclub;
