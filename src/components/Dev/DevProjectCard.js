import React from "react";
/* import Img from "../../assets/developmentProjects/test.png"; */
import "./DevProjectCard.scss";

const DevProjectCard = ({ development }) => {
  const { title, image, desc, link, stack } = development;
  return (
    <div className="dev-project-card">
      <div className="dev-project-card__container">
        <div className="dev-project__details">
          <div className="dev-project-card__image">
            <img src={image} alt={title} />
          </div>
          <div className="dev-project-card__title">
            <h3>{title}</h3>
          </div>
          <div className="dev-project-card__description">
            <p>{desc}</p>
          </div>
          <div className="dev-project-card__stack">{stack}</div>
        </div>
        <div className="dev-project-card__button">
          <a href={link} target="_blank" rel="noreferrer">
            <button>Check out !</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevProjectCard;
