import React from "react";

import "./DevProjectGrid.scss";
import { DevelopmentProjects } from "../../Shared/Data";

import DevProjectCard from "./DevProjectCard";

const DevProjects = () => {
  return (
    <div className="dev-project__container" id="dev-project">
      <h1>Development Projects</h1>
      <div className="dev-project__grid">
        {DevelopmentProjects.map((development) => {
          return (
            <DevProjectCard key={development.id} development={development} />
          );
        })}
      </div>
    </div>
  );
};

export default DevProjects;
