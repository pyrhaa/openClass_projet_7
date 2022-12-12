import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Router from './routes/router';

const App = () => {
  return (
    <div>
      <Navbar className="homepage"></Navbar>
      <Router></Router>
      <Footer className="footer" />
    </div>
  );
};

export default App;
