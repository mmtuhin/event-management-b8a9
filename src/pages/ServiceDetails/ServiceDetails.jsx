import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();

  const service = services.find((item) => item.id === id);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold bg-slate-400 p-4 text-black">
        {service.name}
      </h1>
      <img className="mx-auto" src={service.image} alt="" />
      <p className="mx-4 my-6">{service.description}</p>
      <div className="flex justify-between mx-8 my-6">
        <div>Price{service.price}</div>
        <button className="btn btn-primary">Purchase</button>
      </div>
    </div>
  );
};

export default ServiceDetails;
