'use client'
import { useLanguage } from "../contexts/LanguageContext"

interface CardProps {
    title: string,
    years: string,
    description: string,
}

const Experience = () => {
    const { t } = useLanguage()

    return (
        <section className="experience" id="Experiencia">
            <h1>{t.experience}</h1>
            <ExperienceTable />
        </section>
    )
}

const ExperienceTable = () => {
    const { t } = useLanguage()
    return (
        <div className="experience-table">
            <Card title={t.experienceTitleCard1} years={t.experienceYearsCard1} description={t.experienceDescCard1} />
        </div>
    )
}

const Card = ({ title, years, description }: CardProps) => {
    
    return (
        <div className="card">
            <h2>{title}</h2>
            <p className="years">{years}</p>
            <p className="description">{description}</p>
        </div>
    )

}

export default Experience