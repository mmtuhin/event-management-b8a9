

const TestimonialCard = ({item}) => {
    const {id, customerName, comments, rating} = item
    return (
        <div>
            <div className="flex flex-col justify-between items-center gap-3 border h-full border-slate-800 rounded-sm">
                <h2 className="p-2">{comments}</h2>
                <h1 className="font-semibold">Rating: {rating}</h1>
                <p className="text-right w-full py-2 px-2 font-medium bg-lime-300">--{customerName}</p>
                
            </div>
        </div>
    );
};

export default TestimonialCard;