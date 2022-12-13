import Carrousel from '../Components/Caroussel';
import Dropdown from '../Components/Dropdown';
import Error from './Error';
import RentalHost from '../Components/RentalBlocs/RentalHost';
import RentalRatings from '../Components/RentalBlocs/RentalRatings';
import RentalTags from '../Components/RentalBlocs/RentalTags';
import RentalTitle from '../Components/RentalBlocs/RentalTitle';
import getData from '../data/data.json';

const Rental = () => {
  const rentalData = getData;
  const rentalUrlId = window.location.pathname.substring(8);
  const rental = rentalData.find((item) => item.id === rentalUrlId);

  if (!rental) return <Error />;
  return (
    <div className="rental">
      <Carrousel pictures={rental.pictures}></Carrousel>
      <div className="rental__wrapper">
        <div className="rental__informations">
          <RentalTitle title={rental.title} location={rental.location} />
          <RentalTags tags={rental.tags} />
        </div>
        <div className="rental__host">
          <RentalRatings ratings={rental.rating} />
          <RentalHost host={rental.host} />
        </div>
      </div>
      <div className="rental__details">
        <Dropdown title="Équipements" content={rental.equipments}></Dropdown>
        <Dropdown title="Description" content={rental.description}></Dropdown>
      </div>
    </div>
  );
};

export default Rental;
