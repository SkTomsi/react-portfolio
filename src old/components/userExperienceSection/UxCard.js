import React from "react";

import "./UxCard.scss";

const UxCard = ({ uxProject }) => {
  const { image, projectName, projectDesc } = uxProject;
  return (
    <div className="uxCard__container">
      <div className="uxCard__image">
        <img src={image} alt="" />
      </div>
      <div className="uxCard__info">
        <h1>{projectName}</h1>
        <p>{projectDesc} </p>
      </div>
    </div>
  );
};

export default UxCard;
