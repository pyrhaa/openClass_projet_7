import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logos/NavbarLogo.svg';

const Navbar = () => {
  return (
    <div>
      <Logo className="navbar__logo"></Logo>
      <nav className="navbar__nav">
        <Link className="navbar__nav__link" to="/">
          Accueil
        </Link>
        <Link className="navbar__nav__link" to="/about">
          A propos
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
