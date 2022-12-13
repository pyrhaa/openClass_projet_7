import Carrousel from '../Components/Caroussel';
import Dropdown from '../Components/Dropdown';
import Error from './Error';
import getData from '../data/data.json';

const Rental = () => {
  const rentalData = getData;
  const rentalUrlId = window.location.pathname.substring(8);
  const rental = rentalData.find((item) => item.id === rentalUrlId);

  if (!rental) return <Error />;
  return (
    <div className="rental">
      <Carrousel pictures={rental.pictures}></Carrousel>
      <div className="rental__details">
        <Dropdown title="Équipements" content={rental.equipments}></Dropdown>
        <Dropdown title="Description" content={rental.description}></Dropdown>
      </div>
    </div>
  );
};

export default Rental;
