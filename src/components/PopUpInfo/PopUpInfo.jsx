import { useRef } from "react";
import "./PopUpInfo.css";

function PageStuffInfo() {
  let cancelPopUp = useRef();
  let cancelBgPopUp = useRef();
  function cancelPopUpInfo() {
    cancelBgPopUp.current.className = "bg-of-pop-up-canceld";
    cancelPopUp.current.className = "pop__up-info-canceld";
  }

  return (
    <div className="bg-of-pop-up" ref={cancelBgPopUp}>
      <div className="pop__up-info" ref={cancelPopUp}>
        <button onClick={cancelPopUpInfo} className="cancel-btn">
          X
        </button>
        <div className="pop__up-info--img">X</div>
        <div className="pop__up-info--num_of_order">
          Номер заказа №<span className="num_of_order">51113</span>
        </div>
        <div className="pop__up-info--happened">Произошла какая-то ошибка</div>
        <div className="pop__up-info--do">
          Все вопросы можно уточнить по{" "}
          <a className="emails" href="somonsodikov@gmail.com" type="e-mail">
            nameemail@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageStuffInfo;
