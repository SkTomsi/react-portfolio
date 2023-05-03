import React from "react";

import { uxProjects } from "../../Shared/Data";
import UxCard from "./UxCard";
import "./UxSection.scss";

const UIUXSection = () => {
  return (
    <div className="ui-ux" id="uiux">
      <h1>UI/UX Designs</h1>
      <div className="ui-ux__container">
        {uxProjects.map((uxProject) => {
          return <UxCard uxProject={uxProject} key={uxProject.id} />;
        })}
      </div>
    </div>
  );
};

export default UIUXSection;
