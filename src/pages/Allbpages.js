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

function Allbpages() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/backend_react/displaybpages.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);

        // setItem(result)
      });
  }, []);

  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <>
        <h1 className="products-heading">Business Pages</h1>
        <div className="cartItems-section">
          {item.map((item) => (
            <div className="card">
              <div className="card_img_holder">
                <img
                  src="https://i.ytimg.com/vi/qChQUMVVYTc/maxresdefault.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <p>{item.bname}</p>
                <p>{item.description}</p>
                {/* <button></button> */}
              </div>
            </div>
          ))}
        </div>
      </>
    </main>
  );
}

export default Allbpages;
