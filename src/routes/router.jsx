import { Routes, Route } from 'react-router-dom';
// import Home from
// import About from
// import Rental from
// import Error from

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
