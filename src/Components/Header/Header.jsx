import "./Header.css";
import Logo from "../Logo/Logo";
import HeaderContacts from "../HeaderContacts/HeaderContacts";
import HeaderSocial from "../HeaderSocial/HeaderSocial";
import SignUp from "../SignUp/SignUp";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerMenuNav from "../BurgerMenuNav/BurgerMenuNav";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header-up">
          <Logo />
          <HeaderContacts />
          <HeaderSocial />
          <SignUp />
          <BurgerMenu />
          <BurgerMenuNav />
        </div>
        <div className="header-down">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
