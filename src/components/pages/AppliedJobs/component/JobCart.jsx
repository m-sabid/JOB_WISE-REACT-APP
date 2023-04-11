import React from "react";
import { Link } from "react-router-dom";

const JobCart = ({job}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 items-center">
      <div className="col-span-1 sm:col-span-1 bg-gray-100 h-full flex items-center justify-center rounded-md">
        <img src={job.companyLogoURL} alt="" />
      </div>
      <div className="col-span-1 sm:col-span-4">
        <h5 className="text-xl font-bold">{job.jobTitle}</h5>
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
      </div>
      <div className="col-span-1 sm:col-span-1">
        <Link
          to={`/details/${job.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCart;
