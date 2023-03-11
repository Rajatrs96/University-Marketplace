import React from "react";
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";

import Config from "../Config.json";
const TITLE = "Cancel orders | " + Config["SITE TITLE"]
const DESC = "Cancel orders page"
const CANONICAL = Config.SITE_DOMAIN + "/";


function Cancelorders(){
  const navigate = useNavigate();
  
    return(
        <main>
             <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
            
        </Helmet>
        <div className="cancelorders-activities">
  <h1 className="cancelorders-heading">Cancel Orders</h1>
  <p className="cancelorders-title">Select an order to cancel</p>
  <div>
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/waterbottle.jpg')} 
      alt="waterbottle"
      width={200}
      height={200}
    />
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/products.jpg')} 
      alt="products"
      width={200}
      height={200}
    />
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/business3.jpg')} 
      alt="business3"
      width={200}
      height={200}
    />
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/advertisement1.jpg')} 
      alt="advertisement1"
      width={200}
      height={200}
    />
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/advertisement2.jpg')} 
      alt="advertisement2"
      width={200}
      height={200}
    />
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/advertisement3.jpg')} 
      alt="advertisement3"
      width={200}
      height={200}
    />
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/watch.jpg')} 
      alt="watch"
      width={200}
      height={200}
    />
    <img
      className="cancelorders-highlight"
      tabIndex={1}
      src={require('../images/shoe.jpg')} 
      alt="shoe"
      width={200}
      height={200}
    />
    <button onclick="location.href = 'Cancellationsuccess.html';">
      CONFIRM
    </button>
    <input
      className="back-buttonadd"
      type="button"
      defaultValue="Back"
      onClick={() => navigate(-1)}
    />
  </div>
</div>

        
        
</main>

    )
    }

export default Cancelorders;