import { NavLink } from 'react-router-dom';
import './NavMaF.css'

function NavMaF() {
  return (
    <div className="header__nav">
      <button className="header__nav-item one"> <NavLink to="/catalog">ЖЕНСКОЕ</NavLink></button>
      <button className="header__nav-item two">МУЖСКОЕ</button>
    </div>
  );
}

export default NavMaF;
