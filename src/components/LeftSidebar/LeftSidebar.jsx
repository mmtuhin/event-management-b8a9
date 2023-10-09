import { useEffect, useState } from "react";

const LeftSidebar = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("/latest.json")
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

  return (
    <div className="bg-slate-300 px-4">
      <img src="" alt="" />
      {loading ? (
        <p>Loading data...</p>
      ) : data ? (
        <div className="mt-4">
          <h1 className=" border border-slate-700 font-semibold mb-4 bg-slate-700 text-white py-2 px-2 rounded-sm">
            Latest in gallery
          </h1>
          <div className="grid grid-cols-1 gap-2">
            {data.map((item) => (
              <img className="rounded" key={item.id} src={item.image}></img>
            ))}
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default LeftSidebar;
