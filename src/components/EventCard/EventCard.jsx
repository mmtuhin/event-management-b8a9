import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const EventCard = ({service}) => {

    useEffect(() => {
        AOS.init();
      }, [])

    const {id,name, image, price, description} = service
    return (
            <div data-aos="zoom-in" className="bg-white mx-4 mb-4 p-4 rounded h-auto">
                <img className="rounded" src={image} alt={name} />
                <h3 className="font-semibold mt-3 bg-slate-300 py-1 text-center">{name}</h3>
                <p className="text-gray-700 text-base">{description.slice(0,130) + "......."}</p>
                <div className="flex justify-between items-center my-4">
                    
                    <p className="font-medium">Price: {price}</p>
                    <button className="bg-sky-700 px-3 py-1 text-white rounded font-medium hover:bg-sky-900">
                        <Link to={`service/${id}`}>See Details</Link></button>
                </div>
            </div>
    );
};

export default EventCard;