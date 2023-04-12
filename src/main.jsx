import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobDetails from "./components/pages/JobDetails/JobDetails";
import "react-toastify/dist/ReactToastify.css";
import AppliedJobs from "./components/pages/AppliedJobs/AppliedJobs";
import Statistics from "./components/pages/Statistics/Statistics";
import Blogs from "./components/pages/Blogs/Blogs";
import NotFound from "./components/pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <JobDetails />,
  },
  {
    path: "statistics",
    element: <Statistics />,
  },
  {
    path: "applied-jobs",
    element: <AppliedJobs />,
  },
  {
    path: "blog",
    element: <Blogs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
