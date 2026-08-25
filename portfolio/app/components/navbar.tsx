'use client'
import { useLanguage } from "../contexts/LanguageContext"


interface NavItemProps {
    label: string,
    href: string,
}

const Navbar = () => {
    const { t } = useLanguage();
    return (
        <nav>
            <ul>
                <NavItem label={t.about} href={'#Sobre'} />
                <NavItem label={t.education} href={'#Formacao'} />
                <NavItem label={t.experience} href={'#Experiencia'} />
                <NavItem label={t.skills} href={'#Competencias'} />
                <NavItem label={t.projects} href={'#Projetos'} />
                <NavItem label={t.contact} href={'#Contactos'} />
            </ul>
            <ToogleLanguageBtn />
        </nav>
    )
}

const NavItem = ({ label, href }: NavItemProps) => {
    return (
        <li>
            <a href={href}>
                {label}
            </a>
        </li>
    )
}

const ToogleLanguageBtn = () => {
    const {language, toggleLanguage} = useLanguage();

    return (
        <button
            className={"toggleLanguageBtn"}
            onClick={toggleLanguage}
            aria-label="Change language"
        >
            <span className={language === 'pt' ? "active" : ''}>PT</span>
            <span className={language === 'en' ? "active" : ''}>EN</span>
        </button>
    )

}

export default Navbar