import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard.jsx/TestimonialCard";

const Testimonials = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("/testimonials.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  {
    /* {
                data.map(item => <TestimonialCard key={item.id} item={item}></TestimonialCard>)
            } */
  }

  return (
    <div className="px-4 py-4">
      {loading ? (
        <p>Loading data...</p>
      ) : data ? (
        <div className="mt-4">
          <h1 className=" border border-slate-700 font-semibold mb-4 bg-slate-700 text-white py-2 px-2 rounded-sm">
            Testimonials
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm gap-4">
            {data.map(item => <TestimonialCard key={item.id} item={item}></TestimonialCard>)}
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Testimonials;
