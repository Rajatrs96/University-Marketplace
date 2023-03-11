import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate,useNavigate } from "react-router-dom";
import UserContext from "../components/UserContext";
import {  useContext } from "react";

const TITLE = "Items | " + Config["SITE TITLE"];
const DESC = "Items ";
const CANONICAL = Config.SITE_DOMAIN + "/";



function Items() {
  const { value, setValue } = useContext(UserContext);
  const [title,setTitle] = useState('')
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

    

  useEffect(() => {
    fetch("http://localhost/backend_file/displayproduct.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);
        // console.log(value.firstname)

        // setItem(result)
      });
  }, []);


  const Addtocart = async (title,price) => {
    // let email = value.email
    let config = { method: "POST", title:title,price: price}
    axios.post('http://localhost/backend_file/addtocart.php', config)
        .then((response) => {
           console.log(response.data)
          // window.location.reload(true);
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
        <h1 className="products-heading">Buy the Products</h1>
        {/* <div className="add-to-cart">
          <button  onClick={()=> navigate("/Cart")} id="add-to-cart-button">View Cart</button>
          </div> */}
        <div class="cartcontainer">
        
          {/* {/* <div class="cartbutton">
            <button type="submit" onClick={()=> navigate("./Cart")}>cart</button>
          </div> */}
        </div> 
        {/* <form onSubmit={Addtocart} method='post'> */}
        {/* <div className="cartItems">
        <div className="cartItems-section">
          {item.map((item) => (
            <div className="card">
              <div className="card_img_holder">
                <img
                  src="https://www.qries.com/images/banner_logo.png"
                  // src="/src/images/shoe.jpg"
                  alt=""
                />
              </div>
              
              <div className="content">
                <span className="price">${item.price}</span>&nbsp;&nbsp;
                <span className="cost_strike">$5.89</span>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button type="submit" onClick={() => Addtocart(item.title,item.price)}>Add to cart</button>
              </div>
            </div>
          ))}
          <div className="add-to-cart">
          <button  onClick={()=> navigate("/Cart")} id="add-to-cart-button">View Cart</button>
          </div>
        </div>
        </div> */}
        {/* </form> */}
        <table className="cart-table">
          <tr>
            <th id="cart-column">

        <div className="cartItem1">
          <div className="cartItem-section1">
          {item.map((item) => (
            <div className="card" id="card1">
              <div className="card_img_holder">
                <img
                  src="https://www.qries.com/images/banner_logo.png"
                  // src="/src/images/shoe.jpg"
                  alt=""
                />
              </div>
              
              <div className="content">
                <span className="price">${item.price}</span>&nbsp;&nbsp;
                <span className="cost_strike">$5.89</span>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button type="submit" onClick={() => Addtocart(item.title,item.price)}>Add to cart</button>
              </div>
            </div>
          ))}
          {/* <div className="add-to-cart">
          <button  onClick={()=> navigate("/Cart")} id="add-to-cart-button">View Cart</button>
          </div> */}

          </div>
          

        </div>
        </th>
        <th className="add-to-cart-column">
        <div className="add-to-cart">
          <button  onClick={()=> navigate("/Cart")} id="add-to-cart-button">View Cart</button>
          </div>
        </th>
        </tr>
        </table>
        
      </>
    </main>
  );
}

export default Items;
