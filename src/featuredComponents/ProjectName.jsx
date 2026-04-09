export const ProjectName = ({ data }) => {
    return (
        <div className="name-wrapper">
            <div className="name">
                <h3>{data.name}</h3>
            </div>
        </div>
    );
};