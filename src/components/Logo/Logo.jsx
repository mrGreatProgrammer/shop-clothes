import { NavLink } from 'react-router-dom';
import './Logo.css';

function Logo(props) {
  return (
    <div className={`${props.classInHeader} logo ${props.classInFooter}`}>
      <NavLink to="/"><p>NAMESHOP</p></NavLink>
    </div>
  );
}

export default Logo;
