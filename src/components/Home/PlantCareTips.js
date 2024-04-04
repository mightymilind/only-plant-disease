import React from 'react';
import Leafimage from '../assets/Leaf.png';

const PlantCareTips = () => {
  
  const leaf = `url(${Leafimage})`;

  return (
    <div style={{ backgroundColor: '#d3f0e9', minHeight: 'auto', padding: '4rem 4rem', borderTop: '2px solid black', backgroundImage: leaf }}>
      <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Plant Care Tips</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>Here are some helpful tips to keep your plants healthy and thriving:</p>
        <ol style={{ color: '#fff', fontSize: '1rem', marginLeft: '2rem', textAlign: 'center', listStyle: 'none', padding: 0 }}>
          <li style={{fontSize: "1.1rem", marginBottom: '0.5rem'}}>1. Water your plants regularly, but be careful not to overwater.</li>
          <li style={{fontSize: "1.1rem", marginBottom: '0.5rem'}}>2. Place your plants in locations with appropriate sunlight exposure.</li>
          <li style={{fontSize: "1.1rem", marginBottom: '0.5rem'}}>3. Choose the right type of soil for each plant species.</li>
          <li style={{fontSize: "1.1rem", marginBottom: '0.5rem'}}>4. Prune your plants to promote growth and maintain shape.</li>
        </ol>
      </div>
    </div>
  );
};

export default PlantCareTips;