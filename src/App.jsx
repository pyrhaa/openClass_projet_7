import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Router from './routes/router';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar className="homepage"></Navbar>
      <Router></Router>
      <Footer className="footer" />
    </>
  );
};

export default App;
