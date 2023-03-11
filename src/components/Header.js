import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import UserContext from "./UserContext";

function Header(){

  const {value, setValue} = useContext(UserContext);

  
 
        return (
            <header>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="App.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
              rel="stylesheet"
            />
            {/* <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet"> --> */}
            <script
              src="https://kit.fontawesome.com/43fd798306.js"
              crossorigin="anonymous"
            ></script>
            {/* <!-- Navbar Starting --> */}
            <section id="outline">
              {/* <!-- <a href="#" class="logo"><i class="fa-solid fa-shop fa-2x"></i></a> --> */}
              
              <a class="logo" style={{ textDecoration: "none" }} ><img src={require('../images/cap.png')} alt="Avatar" width="65" height="50"/></a>

        
              <div>

                {value ? (
                  
                  <ul id="navbar">
                  <li><NavLink end activeClassName="current" to="/">Home</NavLink></li>
                  <li><NavLink activeClassName="current" to="services">Services</NavLink></li>
                  <li><NavLink activeClassName="current" to="about">About</NavLink></li>
                  <li><NavLink activeClassName="current" to="contact">Contact</NavLink></li>
                  <li><a href="http://rxb8700.uta.cloud/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                  <li><NavLink activeClassName="current" to={value.role} >My Profile</NavLink></li>
                  <li><NavLink activeClassName="current" to="login" onClick={(e) => setValue(null)}>Logout</NavLink></li>
                </ul>
                ):(       
                  <ul id="navbar">
                  <li><NavLink end activeClassName="current" to="/">Home</NavLink></li>
                  <li><NavLink activeClassName="current" to="services">Services</NavLink></li>
                  <li><NavLink activeClassName="current" to="about">About</NavLink></li>
                  <li><NavLink activeClassName="current" to="contact">Contact</NavLink></li>
                  <li><a href="http://rxb8700.uta.cloud/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                  <li><NavLink activeClassName="current" to="register">Register</NavLink></li>
                  <li><NavLink activeClassName="current" to="login">Login</NavLink></li>
                </ul>
                )
                }
              </div>
            </section>
        
            {/* <!-- Navbar Ending -s-> */}
          </header>
        
        );
  
      }
      export default Header;