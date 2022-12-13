import getData from '../data/getData';
import Hero from '../Components/Hero';
import RentalCard from '../Components/RentalCard';
import { useEffect, useState } from 'react';

const Home = () => {
  const [rentalList, setRentalList] = useState([]);

  useEffect(() => {
    setRentalList([...getData()]);
  }, []);

  return (
    <main className="homepage">
      <Hero origin="homepage"></Hero>
      <section className="rental__section">
        {rentalList.map((item, index) => {
          return (
            <RentalCard
              title={item.title}
              cover={item.cover}
              key={index}
              id={item.id}></RentalCard>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
