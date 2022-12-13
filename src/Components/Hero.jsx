const Hero = ({ origin }) => {
  if (origin === 'homepage') {
    return (
      <div className="herobanner">
        <h1 className="herobanner__title">Chez vous, partout et ailleurs</h1>
      </div>
    );
  } else if (origin === 'about') {
    return <div className="herobanner__about"></div>;
  }
};

export default Hero;
