import "./Main.css";
import Description from "../Description/Description";
import ClientList from "../ClientList/ClientList";

function Main() {
  return (
    <div className="main">
      <div className="main__container container">
        <Description />
        <ClientList />
      </div>
    </div>
  );
}

export default Main;
