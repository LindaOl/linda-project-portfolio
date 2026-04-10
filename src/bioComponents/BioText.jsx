
import profileData from "../profile.json";

import { BioDescription } from "./BioDescription";
import { BioTitle } from "./BioTitle";

export const BioText = () => {
    const profile = profileData.profile;

    return (
        <div className="title-wrapper">

            <BioTitle />

            <div className="description-wrapper">
                <BioDescription description={profile.description} />
            </div>

        </div>
    );
};