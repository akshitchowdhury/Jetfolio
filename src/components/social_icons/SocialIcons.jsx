import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

import './SocialIcons2.css'


const SocialIcons = () => {
  return (
    <div className='social-icons' style={styles.container}>
      <a href="https://www.instagram.com/" style={styles.link}><FaInstagram style={styles.icon('#405DE6', '#405DE6')} /></a>
      <a href="https://www.facebook.com/" style={styles.link}><FaFacebook style={styles.icon('#1877F2', '#1877F2')} /></a>
      <a href="Info@kkindustries.com" style={styles.link}><FaEnvelope style={styles.icon('#EA4335', '#EA4335')} /></a>
      <a href="tel:7975656410" style={styles.link}><FaPhone style={styles.icon('#34A853', '#34A853')} /></a>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: '50%',
    left: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: '9999',
  },
  icon: (color, hoverColor) => ({
    fontSize: '25px', // Adjust the font size here
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
};

export default SocialIcons;
