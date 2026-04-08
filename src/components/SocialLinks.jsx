import data from "../profile.json";

export const SocialLinks = () => {
    const socials = data.profile.socials;

    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/linda-olsson-a41901322/" target="_blank" rel="noopener noreferrer"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
            <a href="https://github.com/LindaOl" target="_blank" rel="noopener noreferrer"><img src="/icons/github.png" alt="GitHub" /></a>
            <a href="http://instagram.com/lindaelol" target="_blank" rel="noopener noreferrer"> <img src="/icons/instagram.png" alt="Instagram" /></a>
        </div>
    );
};