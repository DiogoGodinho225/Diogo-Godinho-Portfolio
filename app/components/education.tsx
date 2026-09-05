'use client'
import { useLanguage } from "../contexts/LanguageContext"

interface CardProps {
    title: string,
    years: string,
    description: string,
}

const Education = () => {
    const { t } = useLanguage()

    return (
        <section className="education" id="Formacao">
            <h1>{t.education}</h1>
            <EducationTable />
        </section>
    )
}

const EducationTable = () => {
    const { t } = useLanguage()
    return (
        <div className="education-table">
            <Card title={t.educationTitleCard1} years={'2011 - 2023'} description={t.educationDescCard1} />
            <Card title={t.educationTitleCard2} years={'2023 - 2025'} description={t.educationDescCard2} />
            <Card title={t.educationTitleCard3} years={t.educationYearsCard3} description={t.educationDescCard3} />
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

export default Education