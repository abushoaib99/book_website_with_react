// Import CSS
import "./Footer.css";

// Import Footer Data
import { footersLinksData } from "../../Data/Data";

// Import Link From React Router Dom
import { Link } from "react-router-dom";

// Footer Params Component
function Params({ title, className, data }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul className={`${className} param-links`}>
        {data.map(({ link, linkname }, index) => {
          return (
            <li key={index}>
              <Link to={link}>{linkname}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Footer component
export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        {/* .........About Params...... */}
        <Params
          title="About Us"
          className="about-params"
          data={footersLinksData.Aboutus}
        />

        {/* .........Discover Params...... */}
        <Params
          title="Discover Us"
          className="discover-params"
          data={footersLinksData.Discover}
        />
        {/* .........My Account Params...... */}
        <Params
          title="My Account"
          className="my-account-params"
          data={footersLinksData.Myaccount}
        />
        {/* .........Help Params...... */}
        <Params
          title="Help"
          className="help-params"
          data={footersLinksData.Help}
        />
      </div>
    </footer>
  );
}
