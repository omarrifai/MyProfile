import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import SoftSkills from './Components/SoftSkills/SoftSkills';
import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Education/>
      <Experience/>
      <SoftSkills/>
      <TechnicalSkills/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
