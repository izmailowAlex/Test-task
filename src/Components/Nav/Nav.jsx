import "./Nav.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navRef = useRef();

  return (
    <nav ref={navRef} className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="header__nav-btn" to="/">
            <div className="header__btn-text">Выполненные работы</div>
          </Link>
        </li>
        <li className="nav__item">
          <Link className="header__nav-btn" to="/">
            <div className="header__btn-text">Каталог готовых объектов</div>
          </Link>
        </li>
        <li className="nav__item">
          <Link className="header__nav-btn" to="/">
            <div className="header__btn-text">Магазин стройматериалов</div>
          </Link>
        </li>
        <li className="nav__item">
          <Link className="header__nav-btn" to="/">
            <div className="header__btn-text">Блог</div>
          </Link>
        </li>
        <li className="nav__item">
          <Link className="header__nav-btn" to="/">
            <div className="header__btn-text">О нас</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
