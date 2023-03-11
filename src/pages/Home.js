import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Home | " + Config["SITE TITLE"]
const DESC = "Step into Shopping"
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends React.Component{
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
    <section>
    
        <div id="content" style={{margin: "0 30%"}}>
            <div id="heading">
            
                <h1>Step into Shopping!
                </h1>
                
            </div>
            <h2>Welcome to UTA Marketplace!</h2>
        </div>
    </section><section>
            <div id="row">
                <div id="column">
                    <div class="card">
                    {/* <img src="products.jpg" alt="Avatar" style={{ width: "100%" }} /> */}
                    <img src={require('../images/products.jpg')} alt="Avatar" style={{ width: "100%" }} />
                        <div class="contain">
                            <h1><b>Products</b></h1>
                            <h3>Checkout the stuff you want to buy!</h3>
                        </div>
                    </div>
                </div>
                <div id="column">
                    <div class="card">
                        <img src={require('../images/clubs.jpg')} alt="Avatar" style={{width: "100%"}} />
                        <div class="contain">
                            <h1><b>Clubs</b></h1>
                            <h3>Choose from the list of clubs</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    );
}
}

export default Home;