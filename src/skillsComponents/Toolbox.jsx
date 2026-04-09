import profileData from "../profile.json";

export const Toolbox = () => {
    const toolbox = profileData.profile.toolbox;

    return (
        <article className="skill-section">
            <h3>Toolbox</h3>
            <ul>
                {toolbox.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
        </article>
    );
};
