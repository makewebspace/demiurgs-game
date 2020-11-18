import "./Card.css"

export const CELL_ID = 'cell';

function Card({ icon, title, description, testId = 0 }) {
  return (
    <div className="Card" data-testid={`${CELL_ID}-${testId}`}>
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
