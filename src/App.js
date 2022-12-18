import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Router from './routes/router';

const App = () => {
  return (
    <div className="app">
      <Navbar className="homepage"></Navbar>
      <Router></Router>
      <Footer className="footer" />
    </div>
  );
};

export default App;
