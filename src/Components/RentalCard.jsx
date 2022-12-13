import { Link } from 'react-router-dom';

const RentalCard = ({ id, cover, title }) => {
  return (
    <Link className="rentalcard" to={'/rental/' + id}>
      <div className="rentalcard__overlay"></div>
      <img className="rentalcard__img" src={cover} alt=""></img>
      <h2 className="rentalcard__title">{title}</h2>
    </Link>
  );
};

export default RentalCard;
