import './Header.css';
import Menu from "../Menu/Menu";
import NavMaF from "../NavMaF/NavMaF";
import Logo from '../Logo/Logo';
import Cool from '../Cool/Cool';

// import HeaderImg from '../HeaderImg/HeaderImg';

function Header() {

  return (
    <header className="header .header-img" >
        <div className="header__top">
        <Menu />
        <NavMaF />
        <Logo classInHeader="logo-in--header" />
        <Cool />
        </div>
        {/* <HeaderImg /> */}

    </header>
  );
}

export default Header;
