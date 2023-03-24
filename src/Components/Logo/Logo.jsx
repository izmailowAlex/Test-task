import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header-logo">
      <Link className="header-logo-image" to="/"></Link>
    </div>
  );
}

export default Logo;
