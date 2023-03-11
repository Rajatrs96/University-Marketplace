import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "About | " + Config["SITE TITLE"]
const DESC = "About us"
const CANONICAL = Config.SITE_DOMAIN + "/";

class About extends React.Component{
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
             <p class = "about-title">
        Get to know us
    </p>
    <p class = "about-description"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula eros, fermentum a tristique ac, dapibus ac arcu. Sed nec lacinia neque. Cras purus enim, mattis nec bibendum eget, vehicula ac nisi. Praesent eget tristique quam, vel dapibus ex. Etiam fringilla lorem lectus, vitae tristique dui ultricies sit amet. Phasellus at aliquet urna. Donec pretium elit sit amet dui rutrum, ut dignissim massa ultricies. Etiam ut ligula eget lorem varius fermentum. Nullam pulvinar leo mauris, eget efficitur nulla sagittis nec. In at tristique elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula eros, fermentum a tristique ac, dapibus ac arcu. Sed nec lacinia neque. Cras purus enim, mattis nec bibendum eget, vehicula ac nisi. Praesent eget tristique quam, vel dapibus ex. Etiam fringilla lorem lectus, vitae tristique dui ultricies sit amet. Phasellus at aliquet urna. Donec pretium elit sit amet dui rutrum, ut dignissim massa ultricies. Etiam ut ligula eget lorem varius fermentum. Nullam pulvinar leo mauris, eget efficitur nulla sagittis nec. In at tristique elit.
    </p>
        </main>
    )
}
}
export default About;