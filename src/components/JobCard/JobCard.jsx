const JobCard = ({ job }) => {
  const { designation, salary_range, part_time, description } = job;
  return (
    <div className="border border-gray-900 bg-white rounded">
      <h1 className="text-center font-semibold bg-slate-700 text-white py-2">
        {designation}
      </h1>
      <p className="bg-lime-300 p-2 text-center font-medium">Salary: {salary_range}</p>
      <div className="p-2">
        
        <p>
          Time: {part_time ? <span>Part Time</span> : <span>Full Time</span>}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobCard;
