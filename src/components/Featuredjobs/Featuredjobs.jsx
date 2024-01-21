import { useState } from 'react';
import { useEffect } from 'react';
import Featuredjob from '../FeaturedJob/Featuredjob';

const Featuredjobs = () => {
  const [showJobs, setShowJobs] = useState(4);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-5xl font-semibold">Featured Jobs</h2>
        <p className="text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 p-3 justify-start">
        {jobs.slice(0, showJobs).map(job => (
          <Featuredjob key={job.id} job={job}></Featuredjob>
        ))}
      </div>
      <div
        className={`text-center ${showJobs === jobs.length ? 'hidden' : ''}`}
      >
        <button
          onClick={() => setShowJobs(jobs.length)}
          className="btn btn-primary"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Featuredjobs;
