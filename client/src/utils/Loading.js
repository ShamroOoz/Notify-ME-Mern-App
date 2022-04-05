import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <HashLoader color="#22C261" size={100} />
    </div>
  );
};

export default Loading;
