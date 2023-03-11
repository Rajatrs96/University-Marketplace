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

function Items() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/backend_file/displayproduct.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);

        // setItem(result)
      });
  }, []);
  const deleteRow = async (title) => {
    let config = { method: "POST", title:title}

    axios.post('http://localhost/backend_file/removeproducts.php', config)
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
        <h1 className="products-heading">Remove products</h1>
        <div className="cartItems-section">
          {item.map((item) => (
            <div className="card">
              <div className="card_img_holder">
                <img
                  src="https://www.qries.com/images/banner_logo.png"
                  alt=""
                />
              </div>
              <div className="content">
                <span className="price">${item.price}</span>&nbsp;&nbsp;
                <span className="cost_strike">$5.89</span>
              
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button onClick={() => deleteRow(item.title)}>Remove this product</button>
              </div>
            </div>
          ))}
        </div>
      </>
    </main>
  );
}

export default Items;
