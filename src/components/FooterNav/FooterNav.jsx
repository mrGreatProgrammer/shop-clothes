import "./FooterNav.css";

function FooterNav() {
  return (
    <div className="footer__nav">
      <ul>
        <li className="footer__nav-item">
          <a href="#">Главная</a>
        </li>
        <li className="footer__nav-item">
          <a href="#">Каталог</a>
        </li>
        <li className="footer__nav-item">
          <a href="#">Женское</a>
        </li>
        <li className="footer__nav-item">
          <a href="#">Мужское</a>
        </li>
        <li className="footer__nav-item">
          <a href="#">Новости</a>
        </li>
        <li className="footer__nav-item">
          <a href="#">Контакты</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterNav;
