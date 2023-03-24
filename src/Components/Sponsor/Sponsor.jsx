import "./Sponsor.css";
import logoAlfa from "./../../images/logo_alfa.svg";

function Sponsor() {
  return (
    <div className="sponsor">
      <div className="sponsor__logo">
        <img className="sponsor__logo_image" src={logoAlfa} alt="sponsor_logo" />
      </div>
      <div className="sponsor__title">
        <span className="sponsor__title_perfom">
          Alfa Digital Agency
        </span>
         – разработка высоко конверсионных сайтов
        </div>
    </div>
  );
}

export default Sponsor;