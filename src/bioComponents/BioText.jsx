import profileData from "../profile.json";
import { BioDescription } from "./BioDescription";

export const BioText = () => {
    const profile = profileData.profile;

    return (
        <div className="bio-information-container">
            <h3>I am {profile.name}</h3>
            <h2>{profile.title}</h2>

            <BioDescription description={profile.description} />
        </div>
    );
};