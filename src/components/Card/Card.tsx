import "./Card.css";
import { GameTypes } from "../../types/GameTypes";

function Card(props: GameTypes) {
  return (
    <div className="card_container">
      <div className="card_avatar">
        <img src={props.thumbnail} />
      </div>
      <div className="card_container-info">
        <span className="card_name">{props.title}</span>
        <span className="card_genre">{props.genre}</span>
      </div>
    </div>
  );
}

export default Card;
