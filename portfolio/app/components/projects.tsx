'use client'
import { useLanguage } from "../contexts/LanguageContext"
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
interface CardProps {
    img: string,
    title: string,
    description: string,
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

    const scroll = (direction: string) => {
        if (listProjectsRef.current) {
            const scrollAmount = direction === 'left' ? -444 : 444;
            listProjectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    const projects = [
        {title: 'teste1', img: "/diogo.png", description: "testes testes teste stets etstets5tets"},
        {title: 'teste2', img: "/diogo.png", description: "testes testes teste stets etstets5tets"},
        {title: 'teste3', img: "/diogo.png", description: "testes testes teste stets etstets5tets"},
        {title: 'teste4', img: "/diogo.png", description: "testes testes teste stets etstets5tets"},
        {title: 'teste5', img: "/diogo.png", description: "testes testes teste stets etstets5tets"},
        {title: 'teste6', img: "/diogo.png", description: "testes testes teste stets etstets5tets"},
        {title: 'teste7', img: "/diogo.png", description: "testes testes teste stets etstets5tets"},
    ]

    return (
        <>
            <div className="projects-list" ref={listProjectsRef}>
                {
                    projects.map((project, i) =>(
                        <Card key={i} img={project.img} title={project.title} description={project.description}/>
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

const Card = ({ img, title, description }: CardProps) => {
    return (
        <div className="card">
            <img src={img} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>ver mais</button>
        </div>
    )
}

export default Projects