import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__btn" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;
