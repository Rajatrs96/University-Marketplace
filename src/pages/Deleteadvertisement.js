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

function Alladv() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/backend_react/displayadv.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);

        // setItem(result)
      });
  }, []);

  const deleteRow = async (title) => {
    let config = { method: "POST", title:title}

    axios.post('http://localhost/backend_react/deleteadv.php', config)
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
        <h1 className="products-heading">Delete an advertisement</h1>
        <div className="cartItems-section">
          {item.map((item) => (
            <div className="card">
              <div className="card_img_holder">
                <img
                  src="https://cdn.web.uta.edu/-/media/project/website/advancement/university-communications/featured-projects/case-2021.ashx?revision=f832942d-3b1d-4dc9-ad6d-62c60d2e8dfd"
                  alt=""
                />
              </div>
              <div className="content">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button onClick={() => deleteRow(item.title)}>Delete this advertisement</button>
              </div>
            </div>
          ))}
        </div>
      </>
    </main>
  );
}

export default Alladv;
