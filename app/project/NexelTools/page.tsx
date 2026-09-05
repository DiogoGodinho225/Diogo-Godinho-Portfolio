'use client'

import { useLanguage } from "@/app/contexts/LanguageContext"
import { SiYii, SiHtml5, SiCss, SiJavascript, SiPhp, SiMysql, SiGithub } from "react-icons/si";
import { FaJava, } from "react-icons/fa"

const NexelTools = () => {

    const { t } = useLanguage();

    return (
        <div className="project-details">
            <h1>{t.NexelTools.title} <a href="https://github.com/DiogoGodinho225/NexelTools"><SiGithub className="icon" /></a></h1>
            <h2>{t.technologies}</h2>
            <div className="tech">
                <div className="tech-group">
                    <h3>WebSite</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiYii className="icon" />
                            <p>Yii2 Framework</p>
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
                        <div className="tech-info">
                            <SiPhp className="icon" />
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>Rest API</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiYii className="icon" />
                            <p>Yii2 Framework</p>
                        </div>
                        <div className="tech-info">
                            <SiPhp className="icon" />
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>Android App</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <FaJava className="icon" />
                            <p>Java</p>
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
            <p className="subtitle">{t.NexelTools.subtitle}</p>
            <ImagesList />
        </div>
    )
}

const ImagesList = () =>{
    const {t} = useLanguage();

    return(
        <div className="img-list">
            <div className="img-group">
                <img src="/NexelTools/NexelToolsHome.png" />
                <h4>{t.NexelTools.subtitles.l1}</h4>
            </div>
            <div className="img-group">
                <img src="/NexelTools/Catalogo.png" />
                <h4>{t.NexelTools.subtitles.l2}</h4>
            </div>
            <div className="img-group">
                <img src="/NexelTools/Produto.png" />
                <h4>{t.NexelTools.subtitles.l3}</h4>
            </div>
            <div className="img-group">
                <img src="/NexelTools/carrinho.png" />
                <h4>{t.NexelTools.subtitles.l4}</h4>
            </div>
            <div className="img-group">
                <img src="/NexelTools/backoffice-home.png" />
                <h4>{t.NexelTools.subtitles.l6}</h4>
            </div>
            <div className="img-group">
                <img src="/NexelTools/gestao-de-vendas.png" />
                <h4>{t.NexelTools.subtitles.l7}</h4>
            </div>
        </div>
    )
}

export default NexelTools