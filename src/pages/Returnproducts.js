import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Return products | " + Config["SITE TITLE"]
const DESC = "Return products "
const CANONICAL = Config.SITE_DOMAIN + "/";

class Returnproducts extends React.Component{
render()
{
    return (
    <main>
        <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
        </Helmet>
        <>
  <h1 className="products-heading">Return</h1>
  <div className="cartItems-section">
    <div className="card">
      <div className="card_img_holder">
        <img src="https://www.qries.com/images/banner_logo.png" alt="" />
      </div>
      <div className="content">
        <span className="price">$3.06</span>&nbsp;&nbsp;
        <span className="cost_strike">$5.89</span>
        <span>(12% off)</span>
        <p>Great value whole vitamin</p>
        <button>Return</button>
      </div>
    </div>
    <div className="card">
      <div className="card_img_holder">
        <img src="https://www.qries.com/images/banner_logo.png" alt="" />
      </div>
      <div className="content">
        <span className="price">$3.06</span>&nbsp;&nbsp;
        <span className="cost_strike">$5.89</span>
        <span>(12% off)</span>
        <p>Great value whole vitamin</p>
        <button>Return</button>
      </div>
    </div>
    <div>
      <p>All products must be returned with in 7 days</p>
    </div>
  </div>
</>

        </main>
    );
}
}

export default Returnproducts;