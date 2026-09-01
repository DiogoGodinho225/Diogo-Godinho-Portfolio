'use client'

import { useLanguage } from "@/app/contexts/LanguageContext"
import { SiNextdotjs, SiHtml5, SiCss, SiTypescript, SiMysql, SiReact, SiPrisma } from "react-icons/si";
import { FaJava, } from "react-icons/fa"

const ToDoApp = () => {

    const { t } = useLanguage();

    return (
        <div className="project-details">
            <h1>{t.ToDoApp.title}</h1>
            <h2>{t.technologies}</h2>
            <div className="tech">
                <div className="tech-group">
                    <h3>WebSite</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiNextdotjs className="icon" />
                            <p>Next.js</p>
                        </div>
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
                            <SiTypescript className="icon" />
                            <p>TypeScript</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>Rest API</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiNextdotjs className="icon" />
                            <p>Next.js API Routes</p>
                        </div>
                        <div className="tech-info">
                            <SiTypescript className="icon" />
                            <p>TypeScript</p>
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
                        <div className="tech-info">
                            <SiPrisma className="icon" />
                            <p>Prisma</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="subtitle">{t.ToDoApp.subtitle}</p>
            <ImagesList />
        </div>
    )
}

const ImagesList = () => {
    const { t } = useLanguage();

    return (
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
                <img src="/NexelTools/Carrinho.png" />
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

export default ToDoApp