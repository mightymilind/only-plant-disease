import React, { useState } from 'react';
import Leafimage from '../assets/Leaf.png';

const Subscription = () => {

  const leaf = `url(${Leafimage})`;

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Subscription email:", email);
    setEmail('');
  };

  return (
    <div style={{ 
      backgroundImage: leaf,
      borderTop: '2px solid black',
      padding: '5rem 5rem', 
      textAlign: 'center',
      color: '#fff',
      margin: '0 auto'
    }}>
      <h2 style={{fontSize: "2.5rem"}}>Subscribe to Our Newsletter</h2>
      <p style={{fontSize: "1.2rem"}}>Stay updated with the latest plant care tips and news!</p>
      
      <div style={{ marginBottom: '1rem' }}>
        <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} style={{ width: '25%', padding: '0.8rem', borderRadius: '5px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff' }} />
      </div>

      <button onClick={handleSubmit} style={{ backgroundColor: '#008000', color: "#f3f3f3", padding: '1rem 2rem', borderRadius: '5px', fontSize: '1.2rem', border: 'none', cursor: 'pointer' }}>Subscribe</button>
    </div>
  );
};

export default Subscription;