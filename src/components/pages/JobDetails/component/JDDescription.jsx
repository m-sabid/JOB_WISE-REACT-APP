import React from "react";

const JDDescription = ({job}) => {
  return (
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
  );
};

export default JDDescription;
