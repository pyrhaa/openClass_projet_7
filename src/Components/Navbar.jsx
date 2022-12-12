import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
