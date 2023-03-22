import "./ClientList.css";
import { ClientListData } from "./ClientListData";
import tick from "../../images/ico_tick.svg";

function ClientList() {
  return (
    <div className="clientList">
      {ClientListData.map((item, index) => {
        return (
          <div className="clientList-item" key={index}>
            <h3 className="clientList__title">{item.title}</h3>
            <ul className="clientList-block">
              {item.list.map((item, index) => {
                return (
                  <li className="clientList-block__item" key={index}>
                    <span className="item__img">
                      <img src={tick} alt="tick" />
                    </span>
                    <span className="item__text">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ClientList;
