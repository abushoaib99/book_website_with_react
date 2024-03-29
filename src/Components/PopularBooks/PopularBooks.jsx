// Import CSS
import "./PopularBooks.css";

// Import Title Props
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// Import Popular Book Data
import { galleryData } from "../../Data/Data";

// Import useState
import { useState } from "react";

export default function PopularBooks() {
  // Active Button Functionality
  const [activeButton, setActiveButton] = useState("all");

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  // Filter Gallery Funcationality
  const filterItmes =
    activeButton === "all"
      ? galleryData
      : galleryData.filter(({ category }) => category === activeButton);

  return (
    <section className="popularbooks">
      <div className="container popularbooks-container">
        <TitleTypeOne
          title={"Popular Books"}
          titleTop={"Some quality items"}
          className={"popularbooks-title"}
        />
        {/*........Filter Tabs Button........ */}
        <div className="filter-buttons">
          <button
            className={activeButton === "all" ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={activeButton === "Business" ? "active" : ""}
            onClick={() => handleFilterChange("Business")}
          >
            Business
          </button>
          <button
            className={activeButton === "Technology" ? "active" : ""}
            onClick={() => handleFilterChange("Technology")}
          >
            Technology
          </button>
          <button
            className={activeButton === "Adventure" ? "active" : ""}
            onClick={() => handleFilterChange("Adventure")}
          >
            Adventure
          </button>
          <button
            className={activeButton === "Romantic" ? "active" : ""}
            onClick={() => handleFilterChange("Romantic")}
          >
            Romantic
          </button>
          <button
            className={activeButton === "Fictional" ? "active" : ""}
            onClick={() => handleFilterChange("Fictional")}
          >
            Fictional
          </button>
        </div>
      </div>
      {/*.........Filter Books Content........... */}
      <div className="gallery">
        {filterItmes.map(({ name, writer, price, image }, index) => {
          return (
            <div className="gallery-item" key={index}>
              <div className="popularbook-image">
                <img src={image} alt="Image" />
              </div>
              <div className="popularbook-info">
                <h4>{name}</h4>
                <div>
                  <small>{writer}</small>
                </div>
                <h5>
                  <span>{price}</span>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
