// Import CSS
import "./FeaturesBooks.css";

// Import Tytle Props
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

export default function FeaturesBooks() {
  return (
    <section>
      <div className="container features-book-contaienr">
        {/*.......Title Props....... */}
        <TitleTypeOne
          titleTop={"Some Quality items"}
          title={"Featured Books"}
        />
      </div>
    </section>
  );
}
