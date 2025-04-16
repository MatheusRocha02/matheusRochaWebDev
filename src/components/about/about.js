import React from "react";
import Stack from "./stack/stack";
import Text from "./text/text";
import './about.css'

const About = () => {
    return(
        <div className="about-container" id="about">
          <Stack />
          <Text />
        </div>
    );
};

export default About;