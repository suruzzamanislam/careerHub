import { CiLocationOn } from 'react-icons/ci';
import { LuCircleDollarSign } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Featuredjob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    remote_or_onsite,
    location,
    salary,
    company_name,
    job_type,
  } = job;
  return (
    <div className="flex flex-col card-compact bg-base-100 shadow-xl">
      <figure className="w-full p-5 flex-grow">
        <img className="w-2/4" src={logo} alt="Logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="font-semibold text-gray-500">{company_name}</p>
        <div>
          <button className="border text-purple-500 border-purple-500 font-semibold p-1 rounded-md">
            {remote_or_onsite}
          </button>
          <button className="border text-purple-500 border-purple-500 font-semibold p-1 ml-4 rounded-lg">
            {job_type}
          </button>
        </div>
        <div className="flex justify-between my-4">
          <h2 className="flex gap-2 items-center text-gray-500">
            <CiLocationOn className="text-xl"></CiLocationOn>
            {location}
          </h2>
          <h2 className="flex gap-2 items-center text-gray-500">
            <LuCircleDollarSign className="text-xl"></LuCircleDollarSign>Salary:
            {salary}
          </h2>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/jobdetails/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featuredjob;
