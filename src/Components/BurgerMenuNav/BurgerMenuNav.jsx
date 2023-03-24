import "./BurgerMenuNav.css";
import { NavLink } from "react-router-dom";
import { bodyHidden } from "./../Handlers/Handlers";

function BurgerMenuNav() {

  function toggleBurgerMenu() {
    const NAV = document.querySelector('#nav');
    NAV.classList.toggle('activated');
    toggleBurgerMenu();
    bodyHidden();
  }

  return (
    <div className="nav-burger" id="nav">
      <nav className="nav-burger-menu">
        <ul className="nav-burger-list">
          <li className="nav-burger__item">
            <NavLink className="nav-burger__btn" to="/gallery" onClick={toggleBurgerMenu}>
              <div className="nav-burger__text">Выполненные работы</div>
            </NavLink>
          </li>
          <li className="nav-burger__item">
            <NavLink className="nav-burger__btn" to="/catalog" onClick={toggleBurgerMenu}>
              <div className="nav-burger__text">Каталог готовых объектов</div>
            </NavLink>
          </li>
          <li className="nav-burger__item">
            <NavLink className="nav-burger__btn" to="/store" onClick={toggleBurgerMenu}>
              <div className="nav-burger__text">Магазин стройматериалов</div>
            </NavLink>
          </li>
          <li className="nav-burger__item">
            <NavLink className="nav-burger__btn" to="/vlog" onClick={toggleBurgerMenu}>
              <div className="nav-burger__text">Блог</div>
            </NavLink>
          </li>
          <li className="nav-burger__item">
            <NavLink className="nav-burger__btn" to="/about" onClick={toggleBurgerMenu}>
              <div className="nav-burger__text">О нас</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenuNav;
