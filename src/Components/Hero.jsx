const Hero = ({ switcher }) => {
  if (switcher === 'about') {
    return <div className="herobanner__about"></div>;
  } else {
    return (
      <div className="herobanner">
        <h1 className="herobanner__title">Chez vous, partout et ailleurs</h1>
      </div>
    );
  }
};

export default Hero;
