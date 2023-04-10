import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Nav from "../../shared/nav/Nav";

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

        <header>
          <h1 className="text-center text-4xl font-bold py-10 mb-10 bg-gray-50 rounded-md">
            Job Details
          </h1>
        </header>

        <div className="grid grid-cols-6 gap-4 ">
          <div className="col-span-4">
            <p className="my-5">
              <b> Job Description: </b> {job.jobDescription}
            </p>
            <p className="my-5">
              <b> Job Responsibility: </b> {job.jobResponsibility}
            </p>
            <p className="my-5">
              <b> Educational Requirements: </b> {job.jobRequirements}
            </p>
            <p className="my-5">
              <b> Experiences: </b> {job.experiences} in this field.
            </p>
          </div>
          {/* Col 2 */}
          <div className="col-span-2">
            <div className="bg-gray-100 px-3 rounded-md">
              <h5
                className="text-lg p-2 
             font-bold"
              >
                Job Details
              </h5>
              <hr />
              {/* Other Info */}

              <div className="flex items-center text-gray-700 justify-start mb-5">
                <img
                  src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-black-circle-icon-28.png"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <p>
                  {" "}
                  <b>Salary: </b> {job.salaryRange}
                </p>
              </div>
              <div className="flex items-center text-gray-700 justify-start mb-5">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <p>
                  <b>Job Title: </b> {job.jobTitle}
                </p>
              </div>

              {/* COntact Info */}
              <h5
                className="text-lg p-2 
             font-bold"
              >
                Contact Information
              </h5>
              <hr />

              <div className="flex items-center text-gray-700 justify-start mb-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADi4uL8/PwaGhp2dnbx8fHu7u74+Pjl5eXX19eWlpZeXl48PDwYGBiKioowMDBNTU2ysrKenp4SEhKEhIRvb28NDQ1DQ0POzs7a2trGxsYqKiofHx+oqKhQUFAE4D5fAAADLUlEQVR4nO3a63KiQBRFYREjiHjDW3Q08/5vOaZSM4lKlW179mmGWut/TvorWmhJBoP48mpaz+aZtvmsnlb5C6uMb7wYiXHfjRZjf+B64+b7bLN29pUrV99nq9ITOPTboN+Nhn7A4pwAmGXnwk3ov0W/WnkBt4mAWbbwARbJgFnms093CYU7D2DgJazy56rCxnpcxCZoJc8/oD+C5jYC0W110Eqef3ZNgubWAtFN5TJoJRGTg+Yu9SebYh+0koiFBM3d6z+IYZspq54efAwbPBGYrhuGLWT79ODAc4T+cBoozD6GzxV2K+2SUBVChAgRIkSI0F345lNCofy3fZVQ6PMXkxyhbQgFITQOoSCExiEUhNA4hIIQGodQEELjEApCaBxCQQiNQygIoXEIBSE0DqEghMYhFITQOISCEBqHUBBC4xAKQmgcQkEIjUMoCKFxCAUhNA6hIITGIRSE0DiEghAah1AQQuMQCkJoHEJBCI1DKAihcQgFITQOoSCExiEUhNA4hIIQGodQEELjEApCaBxCQQiNQygIoXEIBSE0DqEghMYhFITQOISCEBqHUBBC4xAKQmgcQkEIjUMoCKFxCAUhNA6hIITGIRSE0DiEghAah1AQQuMQCkJoHEJBCI27EhZjj4qEwpFPCYUJQogQIUKECBEiRIgQIcJVU+R5XjS/eyp8P/wbcnjvo3B3Neatf8L6Zk7dN+Hy7qXVrGfCX3eDfvVL+N4yKe5u01XhtGXStFfCQ8ukQ6+Ebeuym9QFYdEyqXj8Y/+R8Ngy6dgr4f3DIvZx0VXhtmXStlfC0/3f4fJTr4TZ+m7QR9ygzgqzyc2cSeSc7gpP5dWYyD3aZWF2+nkVJ7HALgsvh9O/l7GMO5J2X3j5nt9Ux6rZvTJCL4y9Q1h1e8eyr9gnBe7bTri2lcukwmX5eImvFvsKyabbF1qKmqTCxkEY97XOKv3H8NJLN/sX2z1enkEpL6LLJYz9YmfRwgc4GKwSAVdewEFxTgI8O+3Rz4abBMC5/kj6o9J/o64cTjNXrX0v4+b+NYi88WL0eGFGjRZjf+ClvJrWs7kYN5/V0+qV/5j/A0yhSG4wfo1TAAAAAElFTkSuQmCC"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <p>
                  <b>Phone: </b> 0188-0001100
                </p>
              </div>

              <div className="flex items-center text-gray-700 justify-start mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <p>
                  <b>Email: </b> {job.companyName}@gmail.com
                </p>
              </div>

              <div className="pb-5 flex items-center text-gray-700 justify-start mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/64/64113.png"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <p className="mr-5">
                  <b> Address: </b> {job.jobLocation}
                </p>
              </div>
            </div>
            {/* Apply Now Button  */}
            <div className="">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* Footer */}
      <Footer />
    </>
  );
};

export default JobDetails;
