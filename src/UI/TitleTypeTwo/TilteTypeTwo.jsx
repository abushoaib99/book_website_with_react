// Import CSS
import "./TitleTypeTwo.css";

// Import Victor image
import victor from "../../assets/victor.png";

export default function TitleTypeTwo({ className, title }) {
  return (
    <div className={`title-type-two ${className}`}>
      <h2>{title}</h2>
      <img src={victor} alt="Victor Image" className="victor" />
    </div>
  );
}
