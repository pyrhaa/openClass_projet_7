import about from '../data/about.json';
// import Hero from '../Components/Hero';
import Dropdown from '../Components/Dropdown';

const About = ({ switcher }) => {
  return (
    <div className="about">
      {/* <Hero origin="about" switcher={switcher('about')}></Hero> */}
      <section className="about__guidelines">
        {about.map((el) => {
          return (
            <Dropdown title={el.title} key={el.id} content={el.description} />
          );
        })}
      </section>
    </div>
  );
};

export default About;
