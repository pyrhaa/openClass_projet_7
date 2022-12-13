const RentalHost = ({ host }) => {
  return (
    <div className="host">
      <p className="host__name">{host.name}</p>
      <img className="host__img" src={host.picture} alt=""></img>
    </div>
  );
};

export default RentalHost;
