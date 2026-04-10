export const ProfileImage = ({ src, alt }) => {
    return (
        <article className="profile-image-wrapper">
            <img
                className="profile-picture"
                src={src} alt={alt}
            />
        </article>
    );
};