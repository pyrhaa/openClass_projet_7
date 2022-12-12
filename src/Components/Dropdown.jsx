import { useState } from 'react';
import Chevron from '../assets/icons/chevron.svg';

const Dropdown = ({ title, content }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const dropContent = () => {
    if (typeof content === 'string') {
      return <p>{content}</p>;
    } else {
      return (
        <ul>
          {content.map((item) => (
            <li className="drop__list" key={item}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="drop">
      <button
        className="drop__visible"
        onClick={() => {
          toggleVisibility();
        }}>
        <h2 className="drop__visible__title">{title}</h2>
        <img
          src={Chevron}
          alt="chevron down"
          className={
            visible ? 'drop__visible__chevron rotate' : 'drop__visible__chevron'
          }></img>
      </button>

      <div
        className={visible ? 'drop__toggle animated' : 'drop__toggle'}
        style={{ height: visible ? `auto` : '0px' }}>
        <div className="drop__toggle__content">{dropContent()}</div>
      </div>
    </div>
  );
};

export default Dropdown;
