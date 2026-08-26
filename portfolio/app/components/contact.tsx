'use client'
import { useLanguage } from "../contexts/LanguageContext"
import { HiOutlineMail } from "react-icons/hi"
import {SiGithub } from 'react-icons/si';
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const { t } = useLanguage()

    return (
        <section className="contact" id="Contactos">
            <h1>{t.contact}</h1>
            <p>{t.contactDesc}</p>
            <a
                href="mailto:diogosimoes225@gmail.com"
            >
                <HiOutlineMail />
                <span>{'diogosimoes225@gmail.com'}</span>
            </a>
            <a
                href="https://www.linkedin.com/in/diogo-godinho-b28249332/"
            >
                <FaLinkedin />
                <span>Linkedin</span>
            </a>
            <a
                href="https://github.com/DiogoGodinho225"
            >
                <SiGithub />
                <span>Github</span>
            </a>
            <p><FaMapMarkerAlt/><span>Leiria, Portugal</span></p>
        </section>
    )
}

export default Contact