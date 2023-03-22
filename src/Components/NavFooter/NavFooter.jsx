import "./NavFooter.css";
import { NavLink } from "react-router-dom";
import icoMain from "./../../images/ico_main.svg";
import icoCatalog from "./../../images/ico_catalog.svg";
import icoBag from "./../../images/ico_bag.svg";
import icoClouds from "./../../images/ico_clouds.svg";
import icoMan from "./../../images/ico_man.svg";
import icoLetter from "./../../images/ico_letter.svg";

function NavFooter() {
    return (
      <div className="footer__nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink className="nav__link" to="/" end>
              <span className="nav__link-img">
                <img className="nav__link_image" src={icoMain} alt="main" />
              </span>
              Главная
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav__link" to="/catalog" end>
              <span className="nav__link-img">
                <img className="nav__link_image" src={icoCatalog} alt="main" />
              </span>
              Каталог готовых объектов
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav__link" to="/store" end>
              <span className="nav__link-img">
                <img className="nav__link_image" src={icoBag} alt="bag" />
              </span>
              Магазин стройматериалов
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav__link" to="/vlog" end>
              <span className="nav__link-img">
                <img className="nav__link_image" src={icoClouds} alt="clouds" />
              </span>
              Блог
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav__link" to="/service" end>
              <span className="nav__link-img">
                <img className="nav__link_image" src={icoMan} alt="man" />
              </span>
              Выезд специалиста
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav__link" to="/contacts" end>
              <span className="nav__link-img">
                <img className="nav__link_image" src={icoLetter} alt="man" />
              </span>
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
  
  export default NavFooter;