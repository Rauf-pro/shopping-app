import React from "react";
import { error } from "../../utils/images";
import "./Error.scss";

const Error = () => {
  return (
    <div className="container py-5">
      <div class="flex flex-center error">
        <img src={error} alt="error" />
      </div>
    </div>
  );
};

export default Error;
