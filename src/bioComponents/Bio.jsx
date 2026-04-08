import { BioImage } from "./BioImage";
import { BioText } from "./BioText";
import { BioDescription } from "./BioDescription";
import { SocialLinks } from "../components/SocialLinks";

export const Bio = () => {
    return (

        <div className="bio-container">
            <div className="biotext-container">
                <BioText />
                <BioDescription />
                <SocialLinks />
            </div>

            <div className="bio-image-container">
                <BioImage />
            </div>

        </div>
    )
}