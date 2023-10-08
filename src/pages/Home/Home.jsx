import { useLoaderData } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";




const Home = () => {
    
    const services = useLoaderData()
    console.log(services);
    return (
        <div className="grid grid-cols-2">
            {
                services.map(service => <EventCard key={service.id} service={service}></EventCard>)
            }
        </div>
    );
};

export default Home;