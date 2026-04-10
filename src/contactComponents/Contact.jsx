import profileData from "../profile.json";
import { ProfileImage } from "../components/ProfileImage";
import { ContactInformation } from "./ContactInformation";
import { SocialLinks } from "../components/SocialLinks";

export const Contact = () => {
    const profile = profileData.profile;
    return (

        <footer className="contact-container">

            <ProfileImage
                src="/images/ama-nobg.png"
                alt="Profile picture"
            />

            <article className="contact-text-wrapper">

                <div className="contact-info">

                    <div className="h2-contact">
                        <h2>Let's Talk</h2>
                    </div>

                    <div className="contact-mail-link">
                        <ContactInformation text={profile.name} />
                        <a href={profile.email}>
                            <ContactInformation text="Email me!" />
                        </a>
                    </div>

                </div>

                <div className="contact-social-links">

                    <SocialLinks />

                </div>

            </article>

        </footer >
    );
};