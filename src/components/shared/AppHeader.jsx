import React from "react";

const AppHeader = (props) => {
  return (
    <header>
      <h1 className="text-center text-4xl font-bold py-10 mb-10 bg-gray-50 rounded-md">
        {props.title}
      </h1>
    </header>
  );
};

export default AppHeader;
