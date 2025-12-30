import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Portfo from './components/Portfo';
import About from './components/About ';
import Technologies from './components/Technologies';
import Education from './components/Education ';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <div className="App bgc">
      <Home />
      <About />
      <Technologies />
      <Education />
      <Contact />
    </div>

      
    
    </div>
  );
}

export default App;
