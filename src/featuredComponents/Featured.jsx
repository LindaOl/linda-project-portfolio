import info from "../data.json";
import { Projects } from "./Projects";

export const Featured = () => {
    return (
        <section className="featured-container">
            <div className="h2-title-container">
                <h2>Featured projects</h2>
            </div>

            <Projects data={info} />
        </section>
    )
}