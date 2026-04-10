import profileData from "../profile.json";

export const BioTitle = () => {
    const profile = profileData.profile;
    const [first, second] = profile.title.split(" ");

    return (
        <div className="bio-information-container">
            <h3>I am {profile.name}</h3>
            <h1>
                {first} <br /> {second}
            </h1>
        </div>
    );
};