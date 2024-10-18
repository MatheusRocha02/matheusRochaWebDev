import React from "react";
import Stack from "./stack/stack";
import './about.css';
import Text from "./me/text/text";
import Spotify from "./me/spotifyEmbed/spotify";
const About = () => {
    return(
        <div className="about-container" id="about">
          <Stack />
          <div className="about-me-div">
          <Text />
          <Spotify />
          </div>
        </div>
    );
};

export default About;