import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center min-h-[100vh] flex flex-col gap-6 justify-center items-center">
      <h1 className="text-4xl">Page not found ...</h1>
      <Link to={"/"} className="text-2xl text-blue-500">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
