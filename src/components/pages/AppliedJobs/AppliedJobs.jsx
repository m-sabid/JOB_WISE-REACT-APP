import { useState, useEffect } from "react";
import Nav from "../../shared/nav/Nav";
import Footer from "../../shared/footer/Footer";
import AppHeader from "../../shared/AppHeader";
import JobCart from "./component/JobCart";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Retrieve cart data from local storage
    const cartData = localStorage.getItem("jobs-cart");
    if (cartData) {
      // Parse cart data from string to object
      const parsedCartData = JSON.parse(cartData);

      // Save cart data to state
      setAppliedJobs(parsedCartData);
    }
  }, []);

  const jobsArray = Object.values(appliedJobs);

  const filteredJobs =
    selectedCategory === "All"
      ? jobsArray
      : jobsArray.filter((job) => job.categoryArray.includes(selectedCategory));

  //   Handel Filter Options
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="my-container">
        <Nav />
        {/* Header */}
        <AppHeader title="Applied Jobs" />
        <div>
          {appliedJobs.length === 0 ? (
            <p>No Applied Job...</p>
          ) : (
            <div>
              <div className="text-end">
                <select
                  className="bg-blue-100 p-3 rounded-md"
                  id="category-select"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  <option value="All">All</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              {filteredJobs.map((job) => (
                <div key={job.id} className="border-2 my-5 p-5 rounded-md">
                  <JobCart job={job} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AppliedJobs;
