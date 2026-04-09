import profileData from "../profile.json";
import { ProfileImage } from "../components/ProfileImage";
import { ContactInformation } from "./ContactInformation";
import { SocialLinks } from "../components/SocialLinks";

export const Contact = () => {
    const profile = profileData.profile;
    return (

        <section className="contact-container">

            <ProfileImage
                src="/images/ama-nobg.png"
                alt="Profile picture"
            />

            <div className="contact-info">
                <div className="h2-contact">
                    <h2>Let's Talk</h2>
                </div>

                <div>
                    <ContactInformation text={profile.name} />
                    <ContactInformation text={profile.email} />
                    <SocialLinks />
                </div>
            </div>

        </section>
    )
}