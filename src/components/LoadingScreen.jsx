import React from "react";
import { RingLoader } from "react-spinners";

const LoadingScreen = ({ isLoading }) => {
  return (
    <div className={`loading-screen ${isLoading ? "visible" : "hidden"}`}>
      <div className="loading-spinner" >
        <RingLoader  size={350} color={"#36D7B7"} loading={isLoading} />
      </div>
    </div>
  );
};

export default LoadingScreen;
