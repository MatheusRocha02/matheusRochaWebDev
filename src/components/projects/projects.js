import React from "react";
import './projects.css';
import { useInView } from 'react-intersection-observer';
import bernardoCunha from '../../assets/bernardo-cunha.png';
import loginSystem from '../../assets/loginSystem-mockup.png';
import portifolio from '../../assets/portifolio.png';
import geradorQRcode from '../../assets/gerador-qr-code.png'
import userManager from '../../assets/user-manager.png';

const Projects = () => {
    
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true 
    });

    const projects = [
        {
            id: 1, image:userManager ,name: 'API Rest- Gerenciador de usuários (FullStack)', description: 'Python, Django, Django Rest Framework, HTML, Bootstrap, SQLite', repository: 'https://github.com/MatheusRocha02/User-manager'
        },
        {
            id: 2, image:loginSystem, name: 'Sistema de Login (FullStack)', description: 'Express.Js, Js, HTML, CSS', repository: 'https://github.com/MatheusRocha02/loginSystem'
        },
        {
            id: 3, image: portifolio,
            name: 'Meu portifólio (FRONT)', description: 'React.js'
        },
        {
            id: 4, image: geradorQRcode, name: 'Gerador de QR Code (FRONT)', description: 'React.js, Tailwind.css', repository: 'https://github.com/MatheusRocha02/gerador-qr-code'
        },
        {
            id: 5, image: bernardoCunha, name: 'Portifólio Designer (FRONT)', description: 'HTML, CSS, JS', repository: 'https://github.com/MatheusRocha02/BernardoCunhaDesigner'
        }
    ]

    return (
        <div className="projects" id="projects">
            <h1>Meus projetos</h1>
            <div className={`projects-container ${inView ? 'fade-in' : ''}`} ref={ref}>
                {projects.map((project) => (
                    <div key={project.id} className='project-card'>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3>{project.name}</h3>
                        <a href={project.repository}>
                        Ver Repositório 🔗
                        </a>
                        <p>{project.description}</p>
                        
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Projects;