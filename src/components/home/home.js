import React from "react";
import './home.css'
import matheusImage from '../../assets/matheus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import cv from '../../assets/CV Matheus Rocha.docx (1).pdf';


const Home = () => {
  return (
    <div className="home-container">
      <div className="main-home-container">
        <img src={matheusImage} alt="Matheus Rocha" className="matheus-image" />

       <div>
       <div className="greeting">
          <h1>console.log('Hello World!! Eu sou o</h1>
          <h2>Matheus Rocha</h2>
          <h3>Desenvolvedor Web</h3>
        </div>
      

      <div className="home-links">
        <a className="fale-comigo-link" href="https://wa.me/5522997166888">Fale comigo</a>
        <a className="cv-link" href={ cv } download>Baixar CV</a>
      </div>
       </div>
      </div>

      <div className="social-medias">
        <a href="https://github.com/MatheusRocha02" className="social-media-icon">
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a className="social-media-icon">
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a className="social-media-icon">
          <FontAwesomeIcon icon={faWhatsapp} size='2x' />
        </a>
      </div>

    </div>
  );
};

export default Home;