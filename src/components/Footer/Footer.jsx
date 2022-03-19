import Logo from '../Header/Logo/Logo';
import './Footer.css';
import FooterNav from '../FooterNav/FooterNav';
import FooterSocialMedia from '../FooterSocialMedia/FooterSocialMedia';

function Footer() {
    return (
        <footer className="footer">
            <Logo classInFooter="in-footer" />
            <FooterNav />
            <FooterSocialMedia />
        </footer>
    )
}

export default Footer;