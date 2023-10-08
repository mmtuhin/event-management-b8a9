import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData()
    const {id} = useParams()

    const service = services.find(item => item.id === id)


    return (
        <div>
            <img src={service.image} alt="" />
            <h1>{service.name}</h1>
            <p>{service.description}</p>
            <div>Price{service.price}</div>
            <button>Purchase</button>
        </div>
    );
};

export default ServiceDetails;