import React from "react";
import './stack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faReact, 
    faGithub, 
    faFigma, 
    faNode 
  } from '@fortawesome/free-brands-svg-icons';

const Stack = () => {
    return(
      <div className="stack-container about-component">
        <p className="stack-title">
            Tecnologias
        </p>
        <div className="stack-icons">
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <FontAwesomeIcon icon={faCss3Alt} size="2x" />
          <FontAwesomeIcon icon={faJs} size="2x" />
          <FontAwesomeIcon icon={faReact} size="2x" />
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <FontAwesomeIcon icon={faFigma} size="2x" />
          <FontAwesomeIcon icon={faNode} size="2x" />
        </div>
      </div>
    );
};

export default Stack;