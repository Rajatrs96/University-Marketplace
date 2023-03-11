import React from "react";
import {Helmet} from "react-helmet";
// import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Config from "../Config.json";
const TITLE = "Cancellation success | " + Config["SITE TITLE"]
const DESC = "Cancellation success page"
const CANONICAL = Config.SITE_DOMAIN + "/";


class Cancellationsuccess extends React.Component{
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
        <h1 class="cancellationsuccess-heading">
            Thank you!
            
        </h1>
        <h1 class="cancellationsuccess-heading">
            Your order has been successfully cancelled            
        </h1>
        
</main>

    )
    }
}
export default Cancellationsuccess;