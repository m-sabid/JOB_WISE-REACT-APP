import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobDetails from "./components/pages/JobDetails/JobDetails";
import "react-toastify/dist/ReactToastify.css";
import AppliedJobs from "./components/pages/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "details/:id",
    element: <JobDetails />,
  },
  {
    path: "statistics",
    element: <App />,
  },
  {
    path: "applied-jobs",
    element: <AppliedJobs />,
  },
  {
    path: "blog",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
