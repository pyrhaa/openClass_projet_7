import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Router from './routes/router';
import { useState } from 'react';

const App = () => {
  const [switchban, setSwitchban] = useState('');

  const switcher = (choice) => {
    setSwitchban(choice);
    return switchban;
  };

  return (
    <div>
      <Navbar className="homepage"></Navbar>
      <Router switcher={switcher}></Router>
      <Footer className="footer" />
    </div>
  );
};

export default App;
