import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
const TITLE = "Services | " + Config["SITE TITLE"]
const DESC = "Services provided"
const CANONICAL = Config.SITE_DOMAIN + "/";

class Services extends React.Component{
render()
{
    return(
        <main>
             <Helmet>
            <title>
                {TITLE}
            </title>
            <link rel = "canonical" href={CANONICAL} />
            <meta name="description" content={DESC} />
            
        </Helmet>
        <div className="service-section">
  <h1>Services</h1>
  <div className="service-card-box">
    <div className="flipBox">
      <div className="flipBoxInner">
        <div className="flipBoxFront">
          <div>
            <img src={require('../images/products.jpg')} alt="" />
          </div>
          <div>Choose from a variety of products.</div>
        </div>
        <div className="flipBoxBack" style={{ backgroundColor: "#78b2b5" }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            unde ad cum expedita voluptatibus iusto, repellat, laborum dolor ab
            saepe blanditiis dicta laboriosam ratione corrupti.
          </p>
        </div>
      </div>
    </div>
    <div className="flipBox">
      <div className="flipBoxInner">
        <div className="flipBoxFront">
          <div>
            <img src={require('../images/clubs.jpg')}alt="" />
          </div>
          <div>Choose from variety of clubs</div>
        </div>
        <div className="flipBoxBack" style={{ backgroundColor: "#78b2b5" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            modi facere doloribus perspiciatis amet nostrum aspernatur repellat
            perferendis ipsum, ad, laudantium, deserunt libero ipsam blanditiis!
          </p>
        </div>
      </div>
    </div>
    <div className="flipBox">
      <div className="flipBoxInner">
        <div className="flipBoxFront">
          <div>
            <img src={require('../images/posts.jpg')}alt="" />
          </div>
          <div>Create and update any posts.</div>
        </div>
        <div className="flipBoxBack" style={{ backgroundColor: "#78b2b5" }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            nobis tempora libero ab eligendi dolores voluptatem id asperiores
            reiciendis dicta nisi nihil necessitatibus accusantium qui.
          </p>
          &gt;
        </div>
      </div>
    </div>
  </div>
</div>

</main>

    )
    }
}
export default Services;