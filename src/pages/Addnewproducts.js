import React ,{useState} from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
const TITLE = "Add new products | " + Config["SITE TITLE"]
const DESC = "Add new products"
const CANONICAL = Config.SITE_DOMAIN + "/";

function Addnewproducts(){

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const Addnewproducts = async (e) => {
        e.preventDefault()
        let config = {method:"POST",title:title,description:description,price:price,email:email,number:number}
        
        try {
          const { data } = await axios
            .post('http://localhost/backend_file/addnewproducts.php', config)
            .then((response) => {
              console.log(response.data)
              navigate('/items')
            })
            .catch((error) => {
              console.log(error)
            })
        } catch (error) {
          setTimeout(() => {
            setError('Invalid credentials...')
          }, 10)
        }
      }


    return(
        <main>
             <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
            
        </Helmet>
        <>
  <h1 className="products-heading">Post your item</h1>
  {/* <div className="cartItems-section"> */}
    {/* <form onSubmit={Addnewproducts} method='post'>
      <div className="form">
        <h3>Product Details</h3>
        <br /> <hr />
        <p>Add title*</p>
        <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} required/> <br />
        <br />
        <hr />
        <p>Product description*</p>
        <input id="description" type="text" onChange={(e) => setDescription(e.target.value)}required/> <br />
        <br />
        <hr />
        <p> Set a price* </p>
        <input id="price"  type="text" onChange={(e) => setPrice(e.target.value)}required/> <br />
        <br />
        <hr />
        <p>Email*</p>
        <input id="email" type="text" onChange={(e) => setEmail(e.target.value)}required/> <br />
        <br />
        <hr />
        <p>Contact number*</p>
        <input id="number" type="text" onChange={(e) => setNumber(e.target.value)}required/> <br />
        <br />
        <br />
        <button type="submit">Post Now</button>
      </div>
    </form> */}

    <form onSubmit={Addnewproducts} method='post'>

<div id="registercontainer">
  <div class="registercred">
    <div class="reg-details">
        <h1>Product Details</h1>
        <hr />
      <label>Add Title*</label>
      <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} required/>
      <label>Product Description</label>
      <input id="description" type="text" onChange={(e) => setDescription(e.target.value)}required/>
      <label>Price</label>
      <input id="price"  type="text" onChange={(e) => setPrice(e.target.value)}required/>
      <label>Email</label>
      <input id="email" type="text" onChange={(e) => setEmail(e.target.value)}required/> <br />
      <label>Contact</label>
      <input id="number" type="text" onChange={(e) => setNumber(e.target.value)}required/> 
      <button type="submit" style={{ marginBottom: 30 }}>Submit</button>

    </div>
  </div>
</div>
</form>

</>

</main>

    )
}
export default Addnewproducts;