// Import CSS
import "./TitleTypeOne.css";

// Import Victor image
import victor from "../../assets/victor.png";

export default function TitleTypeOne({ className, title, titleTop }) {
  return (
    <div className={`title-type-one ${className}`}>
      <small>{titleTop}</small>
      <div className="heading-H">
        <div className="line"></div>
        <h2>{title}</h2>
        <div className="line"></div>
      </div>
      <img src={victor} alt="Victor Image" className="victor" />
    </div>
  );
}
