import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppHeader from "../../shared/AppHeader";
import Footer from "../../shared/footer/Footer";
import Nav from "../../shared/nav/Nav";
import JDDescription from "./component/JDDescription";
import JDDetails from "./component/JDDetails";

const JobDetails = () => {
  const { id } = useParams();

  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    fetch(`FeaturedJobs.json`)
      .then((res) => res.json())
      .then((data) => setJobDetails(data));
  }, []);

  const job = jobDetails.find((p) => p.id === id);

  if (!job) {
    return (
      <div className="text-center min-h-[100vh] flex flex-col gap-6 justify-center items-center">
        <h1 className="text-4xl">Page not found ...</h1>
        <Link to={'/'} className="text-2xl text-blue-500">Back to home</Link>
      </div>
    );
  }

  return (
    <>
      <div className="my-container">
        <Nav />
        {/* Header */}
        <AppHeader title="Job Details" />
        {/* Details */}
        <div className="grid grid-cols-6 gap-4 ">
          <JDDescription job={job} />
          {/* Col 2 */}
          <JDDetails job={job} />
        </div>
        {/* Tost */}
        <ToastContainer />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default JobDetails;
