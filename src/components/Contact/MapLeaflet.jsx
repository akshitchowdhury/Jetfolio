import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'; // Create a separate CSS file for styling
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapLeaflet = () => {
  
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

  return (
    <div className="map-box w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto md:mt-6">
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
  );
};

export default MapLeaflet;
