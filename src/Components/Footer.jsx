import { ReactComponent as FooterLogo } from '../assets/logos/FooterLogo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterLogo className="footer__logo"></FooterLogo>
      <small className="footer__desc">© Kasa. All rights reserved</small>
    </footer>
  );
};

export default Footer;
