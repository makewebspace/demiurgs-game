import "./Card.css"

function Card({ icon, title, description }) {
  return (
    <div className="Card">
      <div className="Card-icon">
        <img src={icon} alt={title} width="40" height="40" />
      </div>
      <div className="Card-body">
        <h2 className="Card-title">{title}</h2>
        <p className="Card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
