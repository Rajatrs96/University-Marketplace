import React, { useInsertionEffect } from "react";
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
  const navigate = useNavigate();

//   const navigateToConfirmed= (post) =>{
//     navigate('/', { state: post}); // here we will redirect user and send your data into state
//  }

  useEffect(() => {
    fetch("http://localhost/backend_file/displayclub.php")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
        console.log(result);

        // setItem(result)
      });
  }, []);

  const getdata = async (clubname,description) => {
    let config = { method: "GET", clubname:clubname, description:description}

    axios.get('http://localhost/backend_react/displayclub.php', config)
        .then((response) => {
          // console.log(response.data)
          window.location.reload(true);

                })
        .catch((error) => {
          console.log(error)
        })
    }
    const movedata = async (clubname,description) => {
      let config = { method: "POST", clubname:clubname, description:description}
  
      axios.post('http://localhost/backend_react/adddatatoleaveclub.php', config)
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
        <h1 className="products-heading">Clubs</h1>
        <div className="cartItems-section">
          {item.map((item) => (
            <div className="card">
              <div className="card_img_holder">
                <img
                  src="https://www.css.edu/wp-content/uploads/Community-participation-in-college.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <p>{item.clubname}</p>
                <p>{item.description}</p>
                <button type="submit"  onClick={() => getdata(movedata(item.clubname,item.description))}
                >Join club</button>
              </div>
            </div>
          ))}
        </div>
      </>
    </main>
  );
}

export default Items;
