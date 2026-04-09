import profileData from "../profile.json";
import { BioDescription } from "./BioDescription";

export const BioText = () => {
    const profile = profileData.profile;

    // Split title into words
    const [first, second] = profile.title.split(" ");

    return (
        <div className="title-wrapper">
            <div className="bio-information-container">
                <h3>I am {profile.name}</h3>

                <h1>
                    {first} <br /> {second}
                </h1>
            </div>

            <div className="description-wrapper">
                <BioDescription description={profile.description} />
            </div>

        </div>
    );
};