import { Routes, Route } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import phone from "../../images/ico_phone.svg";
import dot from "../../images/ico_dot.svg";
import whatsApp from "../../images/ico_whatsApp.svg";
import telegram from "../../images/ico_telegram.svg";
import insta from "../../images/ico_insta.svg";
import facebook from "../../images/ico_facebook.svg";
import mail from "../../images/ico_mail.svg";
import Nav from "../Nav/Nav";

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
            <div className="header-social_wrapper">
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><img className="header__image-social" src={whatsApp} alt="whatsApp" /></a>
              <a href="https://username.t.me/" target="_blank" rel="noopener noreferrer"><img className="header__image-social" src={telegram} alt="telegram" /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className="header__image-social" src={insta} alt="insta" /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img className="header__image-social" src={facebook} alt="facebook" /></a>
              <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer"><img className="header__image-social" src={mail} alt="mail" /></a>
            </div>
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
          <Nav></Nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
