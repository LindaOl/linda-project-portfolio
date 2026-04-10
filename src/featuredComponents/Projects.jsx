import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({ data }) => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        const el = scrollRef.current;
        if (!el) return;

        const scrollAmount = el.clientWidth * 0.8;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        const tolerance = el.clientWidth * 0.05;

        if (maxScrollLeft - el.scrollLeft <= tolerance) {
            el.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        } else {
            el.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollLeft = () => {
        const el = scrollRef.current;
        if (!el) return;

        const scrollAmount = el.clientWidth * 0.8;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        const tolerance = el.clientWidth * 0.05;

        if (el.scrollLeft <= tolerance) {
            el.scrollTo({
                left: maxScrollLeft,
                behavior: "smooth",
            });
        } else {
            el.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="projects-carousel">

            <button
                type="button"
                className="carousel-button carousel-button-left"
                onClick={scrollLeft}
                aria-label="Scroll projects left"
            >
                ‹
            </button>

            <div
                className="cards-scroll"
                ref={scrollRef}
            >
                <div className="cards-track">
                    {data.projects.map((project) => (
                        <ProjectCard key={project.name} data={project} />
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="carousel-button carousel-button-right"
                onClick={scrollRight}
                aria-label="Scroll projects right"
            >
                ›
            </button>
        </div>
    );
};