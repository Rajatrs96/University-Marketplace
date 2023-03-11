import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { Navigate,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import axios from "axios";

const TITLE = "Cart | " + Config["SITE TITLE"];
const DESC = "Cart";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Cart() {
  const [item, setItem] = useState([]);
  const [sum, setSum] = useState([]);

  const checkout = async () => {
    let config = {method: "POST"}
    axios.post('http://localhost/backend_file/checkout.php',config)
    .then((response) =>{
      navigate("/Checkout");
    }) 
    .catch.apply((error) => {
      console.log(error)
    })
  }

 
  useEffect(() => {
    fetch("http://localhost/backend_file/viewcart.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        // console.log(result);
       
        // setItem(result)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost/backend_file/sumproducts.php")
      .then((res1) => res1.json())
      .then((result1) => {
        setSum(result1);
        console.log(result1[0]['SUM(price)']);

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


      <div className="cart-section">
        <h1>Shopping Cart</h1>


        <hr />
      
        <table id="cart-table">
          <tbody id="cart-body">
            <tr className="cart-item">

          
          <th>
            <h3>
          Products
          </h3>
          </th>
          <th>
          <h3>
          Price
          </h3>
          </th>
        </tr>

        {item.map((item) => (
          <tr className="cart-item" key={item.id}>
          <td>
          {item.title}
          </td>
          <td>
          ${item.price}
          </td>
        </tr>

        ))}
        
        {/* <div className="cart-item">
          <div className="cart_item_img">
            <img src="https://www.qries.com/images/banner_logo.png" alt="" />
          </div>
          <p>Apple Juice</p>
          <p>$2.99</p>
        </div>
        <div className="cart-item">
          <div className="cart_item_img">
            <img src="https://www.qries.com/images/banner_logo.png" alt="" />
          </div>
          <p>Apple Juice</p>
          <p>$2.99</p>
        </div> */}

        <div className="total-section">
          <div className="total">
            <h3>Sub-Total :</h3>
            {sum.map((sum) => (
              <h3>${sum.total}</h3>
            ))}
            
          </div>
          <hr />
          <div className="checkout">
            <button  onClick={()=> checkout()}>Checkout</button>
          </div>
        </div>
        </tbody>
        </table>
      </div>
    </main>
  );
}
export default Cart;
