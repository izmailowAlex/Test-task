import "./Description.css";
import employer from "../../images/employer.svg";
import RequestForm from "../RequestForm/RequestForm";

function Description() {
  return (
		<div className="description">
			<div className="description-wrapper">
				<h2 className="description__title">Все материалы о нашей компании и услугах которые мы оказываем</h2>
				<p className="description__text">Здесь вы найдете ответы на самые распространенные вопросы, инструкции и кейсы наших клиентов</p>
				<RequestForm />
			</div>
			<div className="employer-image">
        <img className="employer-image__img" src={employer} alt="employer" />
			</div>
		</div>
	);
}

export default Description;
