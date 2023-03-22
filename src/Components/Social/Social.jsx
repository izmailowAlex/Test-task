import "./Social.css";
import whatsApp from "../../images/ico_whatsApp.svg";
import telegram from "../../images/ico_telegram.svg";
import insta from "../../images/ico_insta.svg";
import facebook from "../../images/ico_facebook.svg";
import mail from "../../images/ico_mail.svg";

function Social() {
  return (
    <div className="header-social_wrapper">
      <a
        href="https://www.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__image-social" src={whatsApp} alt="whatsApp" />
      </a>
      <a
        href="https://username.t.me/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__image-social" src={telegram} alt="telegram" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__image-social" src={insta} alt="insta" />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__image-social" src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.gmail.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__image-social" src={mail} alt="mail" />
      </a>
    </div>
  );
}

export default Social;
