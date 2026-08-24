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
            <img src={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQB7gKtJrakyKux71Gp9e_sWOOEtuAemsTYW-6NFzw4-zM2yJHs4RCliQEit4nodMyZeQxRMlAF7Iob2DG5grvMWyrgZstr_v09OZJ8V8qCX0jUieQruCxmq1ZHCRiH5m0DMeJ8SHmqbsLb&s=19"} />
            <div className="details-zone">
                <div className="text">
                    {t.aboutText}
                </div>
                <div className="info">
                    <div className="card">
                        <FaCode className="icon"/>
                        <h2>{t.languages}</h2>
                        <p>Java, C#, PHP, MySQL, Next.js, React.js, HTML, CSS, JavaScript</p>
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