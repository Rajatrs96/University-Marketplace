import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { Navigate,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TITLE = "Checkout | " + Config["SITE TITLE"];
const DESC = "Checkout";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Checkout() {
  const [item, setItem] = useState([]);
  const [sum, setSum] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost/backend_file/checkout.php")
    //   .then((res) => res.json())
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



        <div className="man-cart-text">Thankyou For Shopping!</div>
        <div className="man-cart">
        <img
                  src={require("../images/man-cart.png")}
                  // src="/src/images/shoe.jpg"
                  alt=""
                  width="300" height="200"

                />
                </div>



    </main>
  );
}
export default Checkout;
