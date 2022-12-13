import { useEffect, useState } from 'react';
import { ReactComponent as ChevronLeft } from '../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/icons/chevron-right.svg';

const Carrousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      let newSlide =
        currentSlide === props.pictures.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    }, 4000);

    if (autoPlay === false) {
      clearTimeout(interval);
    }
  }, [autoPlay, currentSlide, props.pictures]);

  const nextSlide = () => {
    setAutoPlay(false);
    let newSlide =
      currentSlide === props.pictures.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    setAutoPlay(false);
    let newSlide =
      currentSlide === 0 ? props.pictures.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="container">
      <div className="carrousel">
        <div className="carrousel__navigation">
          <ChevronLeft
            className="chevron"
            onClick={() => {
              prevSlide();
            }}
          />

          <ChevronRight
            className="chevron"
            onClick={() => {
              nextSlide();
            }}
          />
        </div>

        {props.pictures.map((picture, index) => {
          return (
            <img
              alt=""
              src={picture}
              key={index}
              className={
                index === currentSlide ? 'carrousel__img' : 'hide-img'
              }></img>
          );
        })}

        <span className="carrousel__legend">
          {currentSlide + 1}/{props.pictures.length}
        </span>
      </div>
    </div>
  );
};

export default Carrousel;
