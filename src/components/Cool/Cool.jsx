import "./Cool.css";
import SearcherImg from '../../img/header-imgs/searcher.png';
import ProfileImg from '../../img/header-imgs/profile.png';
import FavoriteImg from '../../img/header-imgs/favorite.png';
import ShoppingImg from '../../img/header-imgs/shopping-bag.png';
import { Link, NavLink } from "react-router-dom";

function Cool() {
  return (
    <div className="header__items">
      <div className="header__item">
        <NavLink to="/" className="searcher">
          <img src={SearcherImg} alt="" />
        </NavLink>
      </div>
      <div className="header__item">
        <NavLink to="/signup" className="profile">
          <img src={ProfileImg} alt="" />
          </NavLink>
      </div>
      <div className="header__item">
        <NavLink to="/login" className="favorites">
          <img src={FavoriteImg} alt="" />
        </NavLink>
      </div>
      <div className="header__item">
        <NavLink to="/busket" className="shopping-bag">
          <img src={ShoppingImg} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default Cool;
