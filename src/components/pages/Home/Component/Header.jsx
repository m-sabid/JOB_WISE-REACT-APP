import React, { useEffect, useState } from "react";

const Header = () => {
  const [profileImg, setProfileImg] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=business&client_id=MbE1XMj7pdRElJnfBN5e6QwLAPi9WegETpvvo5W92_Y";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProfileImg(data.results.map((dt) => dt.urls.small));
        setRandomIndex(Math.floor(Math.random() * data.results.length));
      });
  }, []);

  return (
    <>
      <div className="header flex flex-col md:flex-row justify-between items-center md:max-h-[32rem] max-h-full md:min-h-[32rem] overflow-hidden">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Connecting <br /> You to your <br />
            <span className="text-blue-500"> Dream career. </span>
          </h1>
          <p className="my-5 w-full md:w-3/4">
            Find your dream career with ease through our extensive job database
            and user-friendly platform. Your perfect job is just a click away on
            our job portal website.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 bg-red-600 mt-10">
          <img
            src={profileImg[randomIndex]}
            alt="Profile image"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
