import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Rental from '../Pages/Rental';
import Error from '../Pages/Error';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/rental/:id" element={<Rental />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export default Router;
