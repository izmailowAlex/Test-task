import "./HeaderSocial.css";
import Social from "../Social/Social";

function HeaderSocial() {
  return (
    <div className="header-wrapper header-wrapper-social">
      <Social />
      <div className="header-wrapper-row">
        <div className="header-wrapper-img">
          <div className="header-wrapper-img-dot"></div>
        </div>
        <span className="header-text">Пишите, мы онлайн</span>
      </div>
    </div>
  );
}

export default HeaderSocial;
