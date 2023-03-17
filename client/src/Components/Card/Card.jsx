import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, abstrac, images } = props.project;

  return (
    <div>
      <p> Name:{name}</p>
      <img src={images} alt={name} />
      <p>Description: {abstrac}</p>
    </div>
  );
}
