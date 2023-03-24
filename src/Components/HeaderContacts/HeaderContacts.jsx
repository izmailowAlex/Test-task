import "./HeaderContacts.css";
import { Link } from "react-router-dom";

function HeaderContacts() {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-row">
        <div className="header-wrapper-img">
          <div className="header-wrapper-img-phone"></div>
        </div>
        <Link className="header-number" to="/">
          +34 624 36 23 26
        </Link>
      </div>
      <div className="header-wrapper-row">
        <div className="header-wrapper-img">
          <div className="header-wrapper-img-dot"></div>
        </div>
        <span className="header-text">Звоните, мы онлайн</span>
      </div>
    </div>
  );
}

export default HeaderContacts;
