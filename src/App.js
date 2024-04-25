import './App.css';
import Navbar from './Navbar';
import Home from './home';
import Information from './informative';
import Best from './best';
import Trend from './trending';
import Testimonal from './testimonal';
import Foot from './footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Trend />
      <Information />
      <Best />
      <Testimonal />
      <Foot />
    </div>
  );
}

export default App;
