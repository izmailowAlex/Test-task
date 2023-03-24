import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Link className="header__btn" to="/popup">
      <div className="header__btn-text">Записаться на экскурсию</div>
    </Link>
  );
}

export default SignUp;
