'use client'
import { useLanguage } from "../contexts/LanguageContext"
import { FaCode, FaGraduationCap , FaProjectDiagram } from "react-icons/fa"


const About = () =>{
    const {t} = useLanguage()
    return(
        <section className="about" id="Sobre">
            <h3>{t.introduction}</h3>
            <h1>{t.about}</h1>
            <Details />
        </section>
    )
}

const Details = () =>{
    const {t} = useLanguage()
    return(
        <div className="details">
            <img src={"/diogo.png"} />
            <div className="details-zone">
                <div className="text">
                    {t.aboutText}
                </div>
                <div className="info">
                    <div className="card">
                        <FaCode className="icon"/>
                        <h2>{t.languages}</h2>
                        <p>Java, C#, PHP, MySQL, Next.js, React.js, HTML, CSS, JavaScript, TypeScript</p>
                    </div>
                    <div className="card">
                        <FaGraduationCap  className="icon"/>
                        <h2>{t.education}</h2>
                        <p>{t.educationCard}</p>
                       
                    </div>
                    <div className="card">
                        <FaProjectDiagram className="icon" />
                        <h2>{t.projects}</h2>
                        <p>{t.projectsCard}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About