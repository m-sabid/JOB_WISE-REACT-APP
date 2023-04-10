import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Featured = () => {
  const [showAll, setShowAll] = useState(false);
  const [jobs, setJobs] = useState([]);

  const slicedJobs = showAll ? jobs : jobs.slice(0, 4);

  
  useEffect(() => {
    fetch("FeaturedJobs.json")
    .then((res) => res.json())
    .then((data) => setJobs(data));
  }, []);
  


  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const buttonText = showAll ? 'Show Less' : 'Show All';



  return (
    <>
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">Featured Jobs</h2>
        <p>Hand-picked "Featured Jobs" for exciting career opportunities.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
        {slicedJobs.map((job) => {
          return (
            <div key={job.id} className="border-2 p-5 rounded-md">
              <div className="h-[50px] overflow-hidden flex justify-start items-center mb-5">
                <img
                  src={job.companyLogoURL}
                  alt=""
                  className="max-w-[100%] max-h-full"
                />
              </div>
              <p className="text-xl">
                <strong>{job.jobTitle}</strong>
              </p>
              <p>{job.companyName}</p>
              <p className="flex gap-4 my-3">
                <span className="bg-blue-100 px-3 py-1 rounded-md">
                  {job.categoryArray[0]}
                </span>
                <span className="bg-blue-100 px-3 py-1 rounded-md">
                  {job.categoryArray[1]}
                </span>
              </p>
              <div className="flex items-center justify-start mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/64/64113.png"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <p className="mr-5"> {job.jobLocation}</p>
                <img
                  src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-black-circle-icon-28.png"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <p> {job.salaryRange}</p>
              </div>
              <Link to={`/details/${job.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md">
                View Details
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button onClick={toggleShowAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Featured;
