// Import CSS
import "./BestSellingBook.css";

// Import Title Props
import TitleTypeTwo from "../../UI/TitleTypeTwo/TilteTypeTwo";

// Import Tree Shape
import TreeShape from "../../assets/treeShape.png";

// Import Selling Books Data
import { sellingBooksData } from "../../Data/Data";

// Import Link From React Router Dom
import { Link } from "react-router-dom";

// Import React Icon
import { BsArrowRight } from "react-icons/bs";

export default function BestSellingBook() {
  return (
    <section className="bestselling-book">
      {/*...........Selling Book Tree Shape........ */}
      <div className="tree-shape">
        <img src={TreeShape} alt="Tree Shape" />
      </div>
      {/*.............Selling Book Content......... */}
      {sellingBooksData.map(
        ({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }, index) => {
          return (
            <div className="container bestselling-container" key={index}>
              {/*.............Left Content......... */}
              <div className="selling-book-left">
                <img src={img} alt="Selling Book Left Image" />
              </div>
              {/*.............Right Content......... */}
              <div className="selling-book-right">
                <TitleTypeTwo
                  className="selling-book-title"
                  title={"Best Selling Book"}
                />
                <div>
                  <small>{infoTitleTop}</small>
                </div>
                <h3>{infoTitle}</h3>
                <p>{desc}</p>
                <h5>
                  <span>{price}</span>
                </h5>
                <Link to={shopbtnLink} className="btn">
                  <small>Shop it now</small>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}
