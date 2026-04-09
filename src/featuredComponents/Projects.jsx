import { ProjectCard } from "./ProjectCard";

export const Projects = ({ data }) => {
    return (
        <div className="cards-scroll">
            <div className="cards-track">
                {data.projects.map((project) => (
                    <ProjectCard key={project.name} data={project} />
                ))}
            </div>
        </div>
    );
};