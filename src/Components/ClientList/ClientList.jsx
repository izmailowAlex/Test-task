import "./ClientList.css";
import { ClientListData } from "./ClienyListData/ClientListData";

function ClientList() {

  const dropDownHandler = (e) => {
    const itemTmp = e.target.closest('.clientList-item');
    itemTmp.classList.toggle('active');
  }

  return (
    <div className="clientList">
      {ClientListData.map((item, index) => {
        return (
          <div className="clientList-item" key={index}>
            <div className="clientList-wrapper" onClick={(e) => dropDownHandler(e)}>
              <h3 className="clientList__title">{item.title}</h3>
              <div className="clientList-arrow">
                <div className="clientList-arrow__img"></div>
              </div>
            </div>
            <ul className="clientList-block">
              {item.list.map((item, index) => {
                return (
                  <li className="clientList-block__item" key={index}>
                    <div className="item-img">
                      <div className="item-img__img"></div>
                    </div>
                    <div className="item__text">{item}</div>
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
