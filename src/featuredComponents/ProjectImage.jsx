export const ProjectImage = ({ data }) => {
    return (
        <img className="image" src={data.image} alt={data.name} />
    );
};