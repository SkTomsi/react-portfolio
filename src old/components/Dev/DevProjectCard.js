
const DevProjectCard = ({ development }) => {
  const { title, desc, link, stack, image } = development;
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
            <button>check out !</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevProjectCard;
