import React from "react";
import { Dna } from "react-loader-spinner";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loaderSection">
      <div className="loaderElement">
        <Dna
          visible={true}
          height="40"
          width="40"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default Loader;
