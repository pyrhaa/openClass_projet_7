const RentalTitle = ({ title, location }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <h4 className="location">{location}</h4>
    </>
  );
};

export default RentalTitle;
