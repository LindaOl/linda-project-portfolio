export const ProfileImage = ({ src, alt }) => {
    return (
        <div className="profile-image-wrapper">
            <img className="profile-picture" src={src} alt={alt} />
        </div>
    );
};