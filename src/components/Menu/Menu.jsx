import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";
import MenuListRight from "./MenuListRight";

function Menu() {
  let toactive = useRef();
  function handleClickHi() {
    if (toactive.current.className === "menu__list menu__list--active") {
      toactive.current.className = "menu__list";
    } else {
      toactive.current.className = "menu__list menu__list--active";
    }
  }

  return (
    <div className="menu">
      <div className="menu__btn" onClick={handleClickHi}>
        <div className="menu__btn-img">
          <div className="menu__img-one"></div>
          <div className="menu__img-two"></div>
        </div>
        <span className="menu__btn-name">Меню</span>
      </div>

      <div className="menu__list" ref={toactive}>
        <ul className="menu__list-left">
          <li className="menu__list-left-item">
            <NavLink to="/">ГЛАВНАЯ</NavLink>
          </li>
          <li className="menu__list-left-item">ЖЕНСКОЕ</li>
          <li className="menu__list-left-item">МУЖСКОЕ</li>
          <li className="menu__list-left-item">ДЛЯ КЛИЕНТА</li>
          <li className="menu__list-left-item">
            <NavLink to="/contacts">КОНТАКТЫ</NavLink>
          </li>
        </ul>
        <MenuListRight />
      </div>
    </div>
  );
}

export default Menu;
