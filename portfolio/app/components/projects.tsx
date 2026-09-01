'use client'
import { useRouter } from "next/navigation"
import { useLanguage } from "../contexts/LanguageContext"
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface CardProps {
    img: string,
    title: string,
    description: string,
    url: string,
}

const Projects = () => {

    const { t } = useLanguage()

    return (
        <section className="projects" id="Projetos">
            <h1>{t.projects}</h1>
            <ProjectsList />
        </section>
    )
}

const ProjectsList = () => {
    const listProjectsRef = useRef<HTMLDivElement>(null);
    const {t} = useLanguage();

    const scroll = (direction: string) => {
        if (listProjectsRef.current) {
            const scrollAmount = direction === 'left' ? -444 : 444;
            listProjectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    const projects = [
        {title: t.NexelTools.title, img: "/NexelTools/NexelToolsHome.png", description: t.NexelTools.description, url: "NexelTools"},
        {title: t.ToDoApp.title, img: "/ToDoApp/ToDoApp.png", description: t.ToDoApp.description, url: "ToDoApp"},
        {title: t.ZenChat.title, img: "/ZenChat/ZenChat.png", description: t.ZenChat.description, url: "ZenChat"},
        {title: t.GestorArmazem.title, img: "/GestorArmazem/Dashboard.png", description: t.GestorArmazem.description, url: "GestorArmazem"},

        
    ]

    return (
        <>
            <div className="projects-list" ref={listProjectsRef}>
                {
                    projects.map((project, i) =>(
                        <Card key={i} img={project.img} title={project.title} description={project.description} url={project.url}/>
                    ))
                }

            </div>
            <div className="list-btns">
                <button onClick={() => scroll('left')}><FaChevronLeft /></button>
                <button onClick={() => scroll('right')}><FaChevronRight /></button>
            </div>
        </>
    )
}

const Card = ({ img, title, description, url }: CardProps) => {
    const router = useRouter()
    return (
        <div className="card">
            <img src={img} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => router.push(`/project/${url}`)}>ver mais</button>
        </div>
    )
}

export default Projects