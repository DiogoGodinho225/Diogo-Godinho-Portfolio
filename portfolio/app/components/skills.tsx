'use client'
import { useLanguage } from "../contexts/LanguageContext"
import { SiNextdotjs, SiLaravel, SiReact, SiHtml5, SiCss, SiJavascript, SiPhp, SiMysql, SiPrisma, SiPython } from "react-icons/si"
import { FaJava, } from "react-icons/fa"
import { TbBrandCSharp } from 'react-icons/tb';




const Skills = () => {
    const { t } = useLanguage()

    return (
        <section className="skills" id="Experiencia">
            <h1>{t.skills}</h1>
            <SkillsTable />
        </section>
    )
}

const SkillsTable = () => {
    return (
        <div className="skills-table">
            <h2>Framework</h2>
            <div className="list">
                <div className="card">
                    <SiNextdotjs className="icon" />
                    <p>Next.js</p>
                </div>
                <div className="card">
                    <SiLaravel className="icon" />
                    <p>Laravel</p>
                </div>
            </div>
            <h2>Frontend</h2>
            <div className="list">
                <div className="card">
                    <SiReact className="icon" />
                    <p>React</p>
                </div>
                <div className="card">
                    <SiHtml5 className="icon" />
                    <p>HTML</p>
                </div>
                <div className="card">
                    <SiCss className="icon" />
                    <p>CSS</p>
                </div>
                 <div className="card">
                    <SiJavascript className="icon" />
                    <p>JavaScript</p>
                </div>
            </div>
            <h2>Backend & APIs</h2>
            <div className="list">
                <div className="card">
                    <SiNextdotjs className="icon" />
                    <p>Next.js API Routes</p>
                </div>
                <div className="card">
                    <SiPhp className="icon" />
                    <p>PHP</p>
                </div>
                <div className="card">
                    <SiLaravel className="icon" />
                    <p>Laravel</p>
                </div>
            </div>
            <h2>Base de dados</h2>
            <div className="list">
                <div className="card">
                    <SiPrisma className="icon" />
                    <p>Prisma</p>
                </div>
                <div className="card">
                    <SiMysql className="icon" />
                    <p>MySql</p>
                </div>
            </div>
            <h2>Linguagens</h2>
            <div className="list">
                <div className="card">
                    <FaJava className="icon" />
                    <p>Java</p>
                </div>
                <div className="card">
                    <TbBrandCSharp className="icon" />
                    <p>C#</p>
                </div>
                <div className="card">
                    <SiPython className="icon" />
                    <p>Python</p>
                </div>
            </div>
        </div>
    )
}

export default Skills