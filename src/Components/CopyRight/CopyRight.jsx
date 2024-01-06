// Import CSS
import "./CopyRight.css";

// Import Footer Social Data
import { footersLinksData } from "../../Data/Data";

export default function CopyRight() {
  return (
    <div className="footer-copyright">
      <div className="container copyright-container">
        <p>&copy; 2024 Book Library. All rights reserved.</p>
        <div className="footer-socials">
          {footersLinksData.socials.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <item.icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
