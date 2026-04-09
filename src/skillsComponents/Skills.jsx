import { Code } from "./Code";
import { Toolbox } from "./Toolbox";


export const Skills = () => {
    return (

        <section className="skills-container">
            <div className="h2-title-container">
                <h2>Skills</h2>
            </div>

            <article className="skill-lists">
                <Code />
                <Toolbox />

            </article>

        </section>
    )
}