import { Tags } from "./Tags";

export const ProjectCard = ({ data }) => {
    return (
        <article className="project-card">

            <div className="project-image-wrapper">
                <img className="project-image" src={data.image} alt={data.name} />
            </div>

            <Tags tags={data.tags} />


            <div className="project-content">

                <h3>{data.name}</h3>

                <p className="project-description">
                    {data.description}
                </p>

                <div className="project-buttons">
                    <a href={data.netlify} target="_blank" rel="noopener noreferrer">
                        <button className="demo">Live Demo</button>
                    </a>

                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                        <button className="view-code">View Code</button>
                    </a>
                </div>

            </div>

        </article>
    );
};