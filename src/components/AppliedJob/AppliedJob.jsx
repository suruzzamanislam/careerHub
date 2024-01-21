import { CiLocationOn } from 'react-icons/ci';
import { LuCircleDollarSign } from 'react-icons/lu';
const AppliedJob = ({ job }) => {
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
    <div className="flex justify-between shadow-xl mb-5 p-5 items-center rounded-lg ">
      <div className="flex gap-x-5 items-center">
        <div className="">
          <img className="w-36 h-28" src={logo} />
        </div>
        <div>
          <h1 className="font-semibold mb-2">{job_title}</h1>
          <p className="mb-2">{company_name}</p>
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
              <LuCircleDollarSign className="text-xl"></LuCircleDollarSign>
              Salary:
              {salary}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <button className="px-4 py-2 bg-purple-500 font-semibold text-white rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedJob;
