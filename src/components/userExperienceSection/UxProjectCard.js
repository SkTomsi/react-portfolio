import React from "react";

import { uxProjects } from "../../Shared/Data";

const UxProjectCard = () => {
  return (
    <div className="ux-project-card">
      <div className="ux-project__title">{uxProjects.projectName}</div>
      <div className="ux-project__image">{uxProjects.image}</div>
    </div>
  );
};

export default UxProjectCard;
