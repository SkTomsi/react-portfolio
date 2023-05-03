import React from "react";
import { SyncLoader } from "react-spinners";

import "./CustomLoader.scss";

import Logo from "../../assets/Logo.png";

const CustomLoader = () => {
  return (
    <div className="loading__container">
      <img src={Logo} alt="mybrand" />
      <div className="syncLoader">
        <SyncLoader color="#911ae5" size={10} />
      </div>
    </div>
  );
};

export default CustomLoader;
