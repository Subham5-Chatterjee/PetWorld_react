import React from "react";

const Loader = () => {
  return (
    <div className="loader-container d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-white">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
