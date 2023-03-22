import "./Header.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import logo from "../../images/logo.svg";
import phone from "../../images/ico_phone.svg";
import dot from "../../images/ico_dot.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header-up">
          <Link className="header__logo" to="/">
            <img className="header__logo-image" src={logo} alt="logo" />
          </Link>
          <div className="header-wrapper">
            <div className="header-wrapper-row">
              <img className="header__image-phone" src={phone} alt="phone" />
              <Link className="header-number" to="/">+34 624 36 23 26</Link>
            </div>
            <div className="header-wrapper-row">
              <img className="header__image-dot" src={dot} alt="dot" />
              <span className="header-text">Звоните, мы онлайн</span>
            </div>
          </div>
          <div className="header-wrapper">
            <Social />
            <div className="header-wrapper-row">
              <img className="header__image-dot" src={dot} alt="phone" />
              <span className="header-text">Пишите, мы онлайн</span>
            </div>
          </div>
          <Link className="header__btn" to="/popup">
            <div className="header__btn-text">Записаться на экскурсию</div>
          </Link>
          <div className="burger-menu">
            <div className="burger-menu__button">
              <span className="burger-menu__lines"></span>
            </div>
          </div>
        </div>
        <div className="header-down">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
