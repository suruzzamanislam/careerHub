import { useLoaderData, useParams } from 'react-router-dom';
import { LuCircleDollarSign } from 'react-icons/lu';
import { MdOutlineSubtitles } from 'react-icons/md';
import { addLocal, checkLocalStorege } from '../../utilitis/LocalStorege';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find(job => job.id == id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  const handleToast = () => {
    const checkLocalId = checkLocalStorege();
    const checkId = checkLocalId.find(lid => lid === id);

    if (checkId) {
      toast('Sorry All Ready apply');
    } else {
      addLocal(id);
      toast('Suscces apply');
    }
  };
  return (
    <div>
      <h1 className="py-7 bg-gray-100 rounded-lg text-center text-3xl font-bold tracking-widest">
        Job Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 py-20">
        <div className="col-span-3 space-y-5 p-4 border shadow-xl">
          <h2>
            <span className="font-bold">Job Description:</span>
            {job_description}
          </h2>
          <h2>
            <span className="font-bold">Job Respossibility:</span>
            {job_responsibility}
          </h2>
          <h2>
            <span className="font-bold">Education Requirements:</span> <br />
            {educational_requirements}
          </h2>
          <h2>
            <span className="font-bold">Experiences:</span>
            <br />
            {experiences}
          </h2>
        </div>
        <div>
          <div className="bg-gray-100 p-3">
            <h2 className="text-xl font-bold border-b border-gray-600 pb-3">
              Job Details
            </h2>
            <div className="mt-3 space-y-2">
              <h2 className="flex gap-2 items-center">
                <LuCircleDollarSign></LuCircleDollarSign>
                <span className="font-semibold">Salary:</span>
                {salary}
              </h2>
              <h2 className="flex gap-2 items-center">
                <MdOutlineSubtitles></MdOutlineSubtitles>
                <span className="font-semibold">Job Title: </span> {job_title}
              </h2>
            </div>
            <div
              className="mt-3
          "
            >
              <h2 className="text-xl font-bold border-b border-gray-600 pb-3">
                Contact Information
              </h2>
              <p className="mt-3">
                <span className="font-semibold">Phone:</span>{' '}
                {contact_information.phone}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                {contact_information.email}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{' '}
                {contact_information.address}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => handleToast()}
              className="bg-blue-500 text-white text-xl font-semibold w-full py-2 rounded-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
