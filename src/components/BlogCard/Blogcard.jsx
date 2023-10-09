

const Blogcard = ({blog}) => {
    const {title, description} = blog
    return (
        <div className="border border-gray-800 my-4 p-4">
            <h1 className="font-semibold">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Blogcard;