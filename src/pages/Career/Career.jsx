import { useLoaderData } from "react-router-dom";
import JobCard from "../../components/JobCard/JobCard";

const Career = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div className="mx-8">
      <h1 className="text-center text-2xl font-bold my-4">Join with us!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 ">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Career;
