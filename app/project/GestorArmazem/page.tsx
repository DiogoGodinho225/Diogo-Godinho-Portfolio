'use client'

import { useLanguage } from "@/app/contexts/LanguageContext"
import { SiLaravel, SiHtml5, SiCss, SiJavascript, SiPhp, SiMysql, SiReact, SiGithub } from "react-icons/si";
import { FaJava, } from "react-icons/fa"

const GestorArmazem = () => {

    const { t } = useLanguage();

    return (
        <div className="project-details">
            <h1>{t.GestorArmazem.title} <a href="https://github.com/DiogoGodinho225/BrindicisStockApp"><SiGithub className="icon" /></a></h1>
            <h2>{t.technologies}</h2>
            <div className="tech">
                <div className="tech-group">
                    <h3>WebSite</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiReact className="icon" />
                            <p>React</p>
                        </div>
                        <div className="tech-info">
                            <SiHtml5 className="icon" />
                            <p>HTML5</p>
                        </div>
                        <div className="tech-info">
                            <SiCss className="icon" />
                            <p>CSS3</p>
                        </div>
                        <div className="tech-info">
                            <SiJavascript className="icon" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>Rest API</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiLaravel className="icon" />
                            <p>Laravel</p>
                        </div>
                        <div className="tech-info">
                            <SiPhp className="icon" />
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>{t.database}</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiMysql className="icon" />
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="subtitle">{t.GestorArmazem.subtitle}</p>
            <ImagesList />
        </div>
    )
}

const ImagesList = () =>{
    const {t} = useLanguage();

    return(
        <div className="img-list">
            <div className="img-group">
                <img src="/GestorArmazem/Dashboard.png" />
                <h4>{t.GestorArmazem.subtitles.l1}</h4>
            </div>
            <div className="img-group">
                <img src="/GestorArmazem/Lista-produtos.png" />
                <h4>{t.GestorArmazem.subtitles.l2}</h4>
            </div>
            <div className="img-group">
                <img src="/GestorArmazem/produto.png" />
                <h4>{t.GestorArmazem.subtitles.l3}</h4>
            </div>
            <div className="img-group">
                <img src="/GestorArmazem/backoffice-lista-reservas.png" />
                <h4>{t.GestorArmazem.subtitles.l4}</h4>
            </div>
            <div className="img-group">
                <img src="/GestorArmazem/backoffice-produtos.png" />
                <h4>{t.GestorArmazem.subtitles.l5}</h4>
            </div>
            <div className="img-group">
                <img src="/GestorArmazem/criar-nova-categoria.png" />
                <h4>{t.GestorArmazem.subtitles.l6}</h4>
            </div>
        </div>
    )
}

export default GestorArmazem