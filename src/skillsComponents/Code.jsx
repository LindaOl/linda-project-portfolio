import profileData from "../profile.json";

export const Code = () => {
    const code = profileData.profile.code;

    return (
        <article className="skill-section">

            <h3>Code</h3>
            <ul>
                {code.map((code) => (
                    <li key={code}>{code}</li>
                ))}
            </ul>

        </article>
    );
};




