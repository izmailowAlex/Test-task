import "./BurgerMenu.css";
import { toggleBurgerMenu, toggleBurgerMenuNav, bodyHidden } from "./../Handlers/Handlers";

function BurgerMenu() {

  function onChangeHandler(e) {
    e.preventDefault();
    toggleBurgerMenu();
    toggleBurgerMenuNav();
    bodyHidden();
  }

  return (
    <div className="burger-menu" id="burger">
      <div className="burger-menu__button" onClick={(e) => onChangeHandler(e)}>
        <span className="burger-menu__lines"></span>
      </div>
    </div>
  );
}

export default BurgerMenu;
