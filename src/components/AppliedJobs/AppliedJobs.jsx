import { useEffect, useState } from 'react';
import { checkLocalStorege } from '../../utilitis/LocalStorege';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const appliedJobsId = checkLocalStorege();
    const allJobs = [];
    for (let id of appliedJobsId) {
      const unicqId = jobs.find(job => job.id == id);
      allJobs.push(unicqId);
    }
    setAppliedJobs(allJobs);
  }, [jobs]);

  const allJobs = () => {
    setDisplayJobs(appliedJobs);
  };
  const remoteJobs = () => {
    const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
    setDisplayJobs(remote);
  };
  const onsiteJobs = () => {
    const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
    setDisplayJobs(onsite);
  };

  return (
    <div>
      <h1 className="py-7 bg-gray-100 rounded-lg text-center text-3xl font-bold tracking-widest my-5">
        Applied Jobs
      </h1>{' '}
      <div className="flex flex-col justify-end">
        <details className="dropdown ml-auto mb-2">
          <summary className="m-1 btn ">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={allJobs}>
              <a>All</a>
            </li>
            <li onClick={remoteJobs}>
              <a>Remote</a>
            </li>
            <li onClick={onsiteJobs}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map(job => (
          <AppliedJob job={job} key={job.id}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
