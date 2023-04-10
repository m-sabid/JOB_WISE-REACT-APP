const data = [
  {
    categoryName: "Account & Finance",
    availableJobs: "300 Jobs Available",
    categoryImage: "https://cdn-icons-png.flaticon.com/256/10134/10134767.png",
  },
  {
    categoryName: "Creative Design",
    availableJobs: "100+ Jobs Available",
    categoryImage: "https://cdn-icons-png.flaticon.com/256/10134/10134783.png",
  },
  {
    categoryName: "Marketing & Sales",
    availableJobs: "150 Jobs Available",
    categoryImage: "https://cdn-icons-png.flaticon.com/256/10134/10134777.png",
  },
  {
    categoryName: "Engineering Job",
    availableJobs: "224 Jobs Available",
    categoryImage: "https://cdn-icons-png.flaticon.com/256/10134/10134786.png",
  },
];

const Category = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Job Category List</h1>
        <p>
          Explore diverse job categories and apply with ease using our job
          portal website.
        </p>
      </div>
      <div className="flex justify-around items-center my-5">
        {data.map((dt, index) => {
          return (
            <div key={index} className="p-5 rounded-md bg-gray-50">
              <img src={dt.categoryImage} alt="" className="w-12 bg-gray-100 p-2 rounded-md" />
              <p>
                <strong>{dt.categoryName}</strong>
              </p>
              <p>
                <small>{dt.availableJobs}</small>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
