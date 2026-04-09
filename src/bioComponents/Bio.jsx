import { ProfileImage } from "../components/ProfileImage";
import { BioText } from "./BioText";
import { SocialLinks } from "../components/SocialLinks";


export const Bio = () => {
    return (

        <section className="bio-container">
            <article className="biotext-container">
                <BioText />
                <SocialLinks />
            </article>

            <article className="bio-image-container">
                <ProfileImage
                    src="/images/profile-noBG.png"
                    alt="Profile picture"
                />
            </article>

        </section>
    )
}