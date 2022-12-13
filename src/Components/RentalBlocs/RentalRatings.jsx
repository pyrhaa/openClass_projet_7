import { ReactComponent as Star } from '../../assets/icons/star.svg';

const RentalRatings = ({ ratings }) => {
  const ratingScale = [1, 2, 3, 4, 5];

  return (
    <div className="stars">
      {ratingScale.map((n) => (
        <Star
          fill={n <= ratings ? '#ff6060' : '#f7f7f7'}
          key={`star-${n}`}
          className="star"></Star>
      ))}
    </div>
  );
};

export default RentalRatings;
