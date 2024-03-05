import React, { useEffect, useState } from 'react';
import './Footer.css';
import footLogo from '../../assets/logo 1.png';

import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import map_short from '../../assets/map_short.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Contact/MapLeaflet.css'; // Create a separate CSS file for styling
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Gallery from '../Gallery/Gallery';
import AboutUs from '../About Us/AboutUs';
import ServicePage from '../Services/ServicePage';
import MapLeaflet from '../Contact/MapLeaflet';
const Footer = () => {
 
  const fixedLocation = [12.8904985, 77.5596266]; // Fixed location coordinates
  const [userLocation, setUserLocation] = useState(null);

  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    // Get user's geolocation
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => console.error('Error getting geolocation:', error),
      { enableHighAccuracy: true }
    );
  }, []);

  const handleMarkerClick = () => {
    const [lat, lng] = fixedLocation;
    const description = "Description of the fixed location";

    // Open Google Maps URL in a new tab
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${description}`);
  };


  const styles = {
    container: {
      position: 'absolute',
      left: '86%',
      
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      zIndex: '9999',
      
    },
    icon: (color, hoverColor) => ({
      fontSize: '25px',
      color: color,
      transition: 'transform 0.3s',
    }),
    link: {
      textDecoration: 'none',
      color: '#fff',
      '&:hover svg': {
        transform: 'scale(1.1)',
        color: (theme) => theme.color.hoverColor,
      },
    },
    mapContainer: {
      width: '300px', // Adjust the width as needed
      height: '300px', // Adjust the height as needed
      borderRadius: '10px', // Rounded corners
      overflow: 'hidden', // Ensure map doesn't overflow
    },
  };
  
  return (
    <footer className="foot   relative bg-black xl:w-full md:w-full sm:overflow-x-hidden">
    {/* Background image */}
    <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('../../assets/f3.webp')"}}></div>
  
    {/* Content */}
    <div className="container mt-0.5 mx-auto relative z-10 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
        {/* Column 1 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">About Us</h4>
          <img src={footLogo} className='footerLogo' alt="footerLogo" />
          <p className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'>KK Industries: Crafting communities through precision fabrication and construction solutions, shaping futures multiple projects at a time.</p>
        </div>
  
        {/* Column 2 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">Contact Us</h4>
          <br />
          <p className="text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed">Kk industries 
          Address: 21/5a, Canara Bank Rd, behind Manasa Theatre, Cross, Konanakunte, Bengaluru, Karnataka 560062
          </p>
          <br/>
          <p className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'>Email:Info@kkindustries.com</p>
          <p className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'>Phone: +91 7975656410 | +91 9353239880</p>
        </div>
  
        {/* Column 3 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">Quick Links</h4>
          <br />
          <ul>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Home</Link></li>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">About Us</Link></li>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Services</Link></li> 
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Gallery</Link></li>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Contact Us</Link></li>
          </ul>
        </div>
  
        {/* Column 4 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">Follow Us</h4>
          <br />
          <div className='mini_map flex space-x-4' style={styles.mapContainer}>
            {/* <MapLeaflet className="w-full" /> */}
          
            <div className="map-box w-full md:w-full lg:w-full xl:full mx-auto md:mt-6">
      <MapContainer center={fixedLocation} zoom={13} className="w-full h-96 md:h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={fixedLocation} icon={redIcon} eventHandlers={{ click: handleMarkerClick }}>
          <Popup>KK Industries</Popup>
        </Marker>
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>User Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  
          
          
          
          </div>
        </div>
      </div>
  
      {/* Powered by Innomatrics Technologies */}
      <h3 className="text-center text-white text-xl mb-6">Powered by Innomatrics Technologies</h3>
    </div>
  </footer>
  
  );
};

export default Footer;
