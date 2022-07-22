import React from "react";
import loading from "../media/loading.gif";

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-wrap">
        <img src={loading} alt=""></img>
      </div>
    );
  }

  return null;
};

export default Loading;
