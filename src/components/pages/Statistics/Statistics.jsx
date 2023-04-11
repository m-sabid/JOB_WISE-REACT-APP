import React from "react";
import Nav from "../../shared/nav/Nav";
import AppHeader from "../../shared/AppHeader";
import Footer from "../../shared/footer/Footer";
import ChartComponent from "./ChartComponent";

const Statistics = () => {
  return (
    <>
      <div className="my-container">
        <Nav />
        {/* Header */}
        <AppHeader title="Assignments Statistics" />

        <ChartComponent />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Statistics;
