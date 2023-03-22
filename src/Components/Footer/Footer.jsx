import "./Footer.css";
import Partners from "../Partners/Partners";
import NavFooter from "../NavFooter/NavFooter";
import Control from "../Control/Control";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container container">
        <Partners />
        <NavFooter />
        <Control />
      </div>
    </div>
  );
}

export default Footer;
