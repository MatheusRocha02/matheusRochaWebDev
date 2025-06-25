// Criar componente experiência

import React from "react";
import '../experience/experience.css'

const Experience = () => {


    return (
        <div className="exp-container" id="experience">
            <h1>Experiência</h1>
            <ul className="exp-list">

                {/* Experiência Adepta */}
                <li className="exp">
                    <div className="title-and-date">
                        <h2 className="exp-title">Desenvolvedor FullStack - Adepta Automação e Sistemas</h2>
                        <h3 className="exp-date">05/25 - Presente (Remoto)</h3>
                    </div>
                    <div className="stack-and-description">
                        <div>
                            <h4>Tecnologias utilizadas</h4>
                            <p>Python, Django, Django REST Framework, React, Docker, PostgreSQL, HTML, CSS, JavaScript, Bootstrap, Git/GitHub, Linux</p>
                        </div>
                        <div>
                            <h4>Descrição</h4>
                            <ul className="exp-description-list">
                                <li>Desenvolvimento de aplicações web integradas ao ERP da empresa, focando em escalabilidade e performance.</li>
                                <li>Criação de APIs RESTful com Django e DRF para fornecimento de dados em tempo real.</li>
                                <li>Implementação de dashboards responsivos (mobile first) com React para exibir métricas de vendas, estoque e financeiro.</li>
                                <li>Desenvolvimento de funcionalidades como filtros dinâmicos por período, totalizadores e relatórios personalizados.</li>
                                <li>Containerização com Docker e Docker Compose para padronização dos ambientes e CI.</li>
                                <li>Implantação de ambiente de produção com Nginx, Gunicorn e servidores Linux (Ubuntu).</li>
                                <li>Configuração de HTTPS com SSL para garantir a segurança das aplicações.</li>
                                <li>Implementação de autenticação JWT para APIs seguras e escaláveis.</li>
                                <li>Administração e consulta a banco de dados PostgreSQL remoto, com foco em segurança e eficiência.</li>
                                <li>Prototipação e implementação de interfaces com foco em UX.</li>
                                <li>Versionamento de código com Git e GitHub usando convenções de commits semânticos.</li>
                            </ul>
                        </div>
                    </div>
                </li>

                {/* Experiência IFF */}
                <li className="exp">
                    <div className="title-and-date">
                        <h2 className="exp-title">Desenvolvedor FullStack - IFF Campus Centro</h2>
                        <h3 className="exp-date">04/25 - Presente (Remoto)</h3>
                    </div>
                    <div className="stack-and-description">
                        <div>
                            <h4>Tecnologias utilizadas</h4>
                            <p>Python, Django, Django REST Framework, HTML, CSS, JavaScript, Bootstrap, Git/GitHub</p>
                        </div>
                        <div>
                            <h4>Descrição</h4>
                            <p>
                                Desenvolvimento de sistema institucional integrado para gestão de TCCs: backend, front-end, integração de APIs, modelagem e gerenciamento de banco de dados, controle de versão e colaboração em equipe.
                            </p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}



export default Experience;