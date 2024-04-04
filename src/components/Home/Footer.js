import React from 'react';
import Leafimage from '../assets/Leaf.png';

const Footer = () => {

  const leaf = `url(${Leafimage})`;

  return (
    <footer id='footer' style={{ backgroundColor: '#d3f0e9', padding: '2rem 1rem', borderTop: '2px solid black', textAlign: 'center', backgroundImage: leaf}}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', color: '#f3f3f3', marginBottom: '1rem' }}>&copy; 2023 Plant Remedy, Inc.</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 1rem' }}><a href="/about" style={{ color: '#f3f3f3', textDecoration: 'none' }}>About</a></li>
          <li style={{ margin: '0 1rem' }}><a href="/contact" style={{ color: '#f3f3f3', textDecoration: 'none' }}>Contact</a></li>
          <li style={{ margin: '0 1rem' }}><a href="/terms" style={{ color: '#f3f3f3', textDecoration: 'none' }}>Terms of Service</a></li>
          <li style={{ margin: '0 1rem' }}><a href="/privacy" style={{ color: '#f3f3f3', textDecoration: 'none' }}>Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;