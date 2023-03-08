import { Link } from "react-router-dom";
import "./RequestForm.css";
import pen from "../../images/ico_pen.svg";
import fire from "../../images/ico_fire.svg";

function RequestForm() {
  return (
    <form className="request-form">
      <p className="request-form__text">
        <Link className="request-form__text-link" to="">
          Хотите с нами связаться
        </Link>
        , оставьте заявку и специалист свяжется с вами в течение 30 минут.
        <span className="request-form__text-fire">
          <img src={fire} alt="fire" />
        </span>
      </p>
      <input className="request-form__input" type="text" placeholder="Номер телефона"></input>
      <button className="request-form__button" type="button">
        Оставить заявку 
        <span className="request-form__button-img">
          <img src={pen} alt="pen" />
        </span>
      </button>
    </form>
  );
}

export default RequestForm;
