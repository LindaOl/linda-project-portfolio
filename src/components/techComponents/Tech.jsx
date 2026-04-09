import profileData from "../../profile.json";

export const Tech = () => {
    const tech = profileData.profile.tech;

    return (
        <section className="tech-container">
            <div className="h2-title-container">
                <h2>Tech</h2>
            </div>

            <div className="tech-text">
                <p>{tech.join(", ")}</p>
            </div>

        </section>
    );
};