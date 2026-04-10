import data from "../data.json";

export const Tags = ({ tags = [] }) => {
    return (
        <article className="tag-list">
            <div className="tags">
                {tags.map((tag) => (
                    <button className="tag" key={tag}>
                        {tag}
                    </button>
                ))}
            </div>
        </article>
    );
};
