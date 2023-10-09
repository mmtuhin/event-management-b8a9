import { useLoaderData } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";





const Home = () => {
    
    const services = useLoaderData()
    //console.log(services);
    return (
        <div>
            <h1 className="mt-4 mx-4 border border-slate-700 font-semibold mb-4  bg-slate-700 text-white py-2 px-2 rounded-sm">
            Our Services
          </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
            {
                services.map(service => <EventCard key={service.id} service={service}></EventCard>)
            }
        </div>
        </div>
    );
};

export default Home;