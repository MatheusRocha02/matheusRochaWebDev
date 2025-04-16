// Criar componente experiência

import React from "react";
import '../experience/experience.css'

const Experience = () => {


    return (
        <div className="exp-container" id="experience">
            <h1>
                Experiência
            </h1>
            <ul className="exp-list">
                <li className="exp">
                    <div className="title-and-date">
                        <h2 className="exp-title">
                            Desenvolvedor FullStack - IFF Campus Centro
                        </h2>
                        <h3 className="exp-date">
                            04/25 - Presente (Remoto)
                        </h3>
                    </div>
                    <div className="stack-and-description">
                        <div>
                            <h4>
                                Tecnologias utilizadas
                            </h4>
                            <p>
                                Python, Django, Django Rest Framework, HTML, CSS, Javascript, Bootstrap, Git/GitHub
                            </p>
                        </div>
                        <div>
                            <h4>
                                Descrição
                            </h4>
                            <p>
                                Desenvolvimento de sistema institucional integrado para gestão de TCCs:  Desenvolvimento backend, desenvolvimento Front-End, integração de APIs, modelagem e gerenciamento de banco de dados, controle de versão e colaboração em equipe
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    )
}



export default Experience;