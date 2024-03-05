import logo from './logo.svg';
import './App.css';

// import BgNav from './components/BgNav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBlocks from './components/NavBlock/NavBlocks';
import Gallery from './components/Gallery/Gallery';
import AboutUs from './components/About Us/AboutUs';
import Conatct from './components/Contact/ContactComponent';
import SocialIcons from './components/social_icons/SocialIcons';

import mainLogo from './assets/logo 1.png'



function App() {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Router>
    <SocialIcons/>  
    

      {/* <Navbar />
      
       */}
      <Routes>
        <Route path="/" element={<NavBlocks/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Conatct/>} />
        {/* 
        <Route path="/services" element={<Services/>} />
        
        <Route path="/contact" element={<Contact/>} /> */}

        {/*         
        */}

      </Routes>
        
  
    </Router>
    </div>
    </>
  );
}

export default App;
