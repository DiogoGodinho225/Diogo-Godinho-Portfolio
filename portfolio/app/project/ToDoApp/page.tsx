'use client'

import { useLanguage } from "@/app/contexts/LanguageContext"
import { SiNextdotjs, SiHtml5, SiCss, SiTypescript, SiMysql, SiReact, SiPrisma } from "react-icons/si";

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
                <img src="/ToDoApp/login.png" />
                <h4>{t.ToDoApp.subtitles.l1}</h4>
            </div>
            <div className="img-group">
                <img src="/ToDoApp/Perfil.png" />
                <h4>{t.ToDoApp.subtitles.l2}</h4>
            </div>
            <div className="img-group">
                <img src="/ToDoApp/criar-projeto.png" />
                <h4>{t.ToDoApp.subtitles.l3}</h4>
            </div>
            <div className="img-group">
                <img src="/ToDoApp/ToDoApp.png" />
                <h4>{t.ToDoApp.subtitles.l4}</h4>
            </div>
            <div className="img-group">
                <img src="/ToDoApp/membros.png" />
                <h4>{t.ToDoApp.subtitles.l5}</h4>
            </div>
            <div className="img-group">
                <img src="/ToDoApp/quadro.png" />
                <h4>{t.ToDoApp.subtitles.l6}</h4>
            </div>
        </div>
    )
}

export default ToDoApp