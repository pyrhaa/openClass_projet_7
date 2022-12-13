import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logos/NavbarLogo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo className="navbar__logo"></Logo>
      <nav className="navbar__nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar__nav__link active' : 'navbar__nav__link'
          }
          to="/">
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar__nav__link active' : 'navbar__nav__link'
          }
          to="/about">
          A propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
