import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../shared/footer/Footer";
import Nav from "../../shared/nav/Nav";
import JDDescription from "./component/JDDescription";
import JDDetails from "./component/JDDetails";
import JDHeader from "./component/JDHeader";

const JobDetails = () => {
  const { id } = useParams();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("../../../../public/FeaturedJobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const job = jobs.find((p) => p.id === id);

  if (!job) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="my-container">
        <Nav />
        {/* Header */}
        <JDHeader />
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
