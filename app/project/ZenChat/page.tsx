'use client'

import { useLanguage } from "@/app/contexts/LanguageContext"
import { SiMysql, SiGithub } from "react-icons/si";
import { TbBrandCSharp } from 'react-icons/tb';

const ZenChat = () => {

    const { t } = useLanguage();

    return (
        <div className="project-details">
            <h1>{t.ZenChat.title} <a href="https://github.com/DiogoGodinho225/ZenChat"><SiGithub className="icon" /></a></h1>
            <h2>{t.technologies}</h2>
            <div className="tech">
                <div className="tech-group">
                    <h3>Chat</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <TbBrandCSharp className="icon" />
                            <p>C# (.NET)</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>{t.rtc}</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <p>WebSockets</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>{t.security}</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <p>{t.cryptography}</p>
                        </div>
                        <div className="tech-info">
                            <p>{t.signature}</p>
                        </div>
                    </div>
                </div>
                <div className="tech-group">
                    <h3>{t.database}</h3>
                    <div className="tech-list">
                        <div className="tech-info">
                            <SiMysql className="icon" />
                            <p>MySQL (local)</p>
                        </div>

                    </div>
                </div>
            </div>
            <p className="subtitle">{t.ZenChat.subtitle}</p>
            <h2>{t.ZenChat.title2}</h2>
            <ol>
                <li>
                    <h3>{t.ZenChat.list.l1}</h3>
                    <p>{t.ZenChat.list.l1txt}</p>
                </li>

                <li>
                    <h3>{t.ZenChat.list.l2}</h3>
                    <p>{t.ZenChat.list.l2txt}</p>
                </li>
                
                <li>
                    <h3>{t.ZenChat.list.l3}</h3>
                    <p>{t.ZenChat.list.l3txt}</p>
                </li>
                <li>
                    <h3>{t.ZenChat.list.l4}</h3>
                    <p>{t.ZenChat.list.l4txt}</p>
                </li>
            </ol>
            <ImagesList />
        </div>
    )
}

const ImagesList = () => {
    const { t } = useLanguage();

    return (
        <div className="img-list">
            <div className="img-group">
                <img src="/ZenChat/Login.png" />
                <h4>{t.ZenChat.subtitles.l1}</h4>
            </div>
            <div className="img-group">
                <img src="/ZenChat/ZenChat.png" />
                <h4>{t.ZenChat.subtitles.l2}</h4>
            </div>
            <div className="img-group">
                <img src="/ZenChat/server.png" />
                <h4>{t.ZenChat.subtitles.l3}</h4>
            </div>

        </div>
    )
}

export default ZenChat