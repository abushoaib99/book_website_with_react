// Import CSS
import "./Quote.css";

// Import Title Props
import TitleTypeTwo from "../../UI/TitleTypeTwo/TilteTypeTwo";

// Import Quote Data
import { quoteData } from "../../Data/Data";

export default function Quote() {
  return (
    <section className="quote">
      <div className="container quote-container">
        <TitleTypeTwo className={'quote-title'} title={"Quote of the day"} />
        {quoteData.map(({ quote, speaker }, index) => {
          return (
            <article key={index}>
              <p>{quote}</p>
              <h5>{speaker}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
}
