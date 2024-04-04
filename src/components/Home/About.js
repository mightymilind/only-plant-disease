import React from 'react';
import Leafimage from '../assets/Leaf.png';




// D:\milind project\client\src\assets\Leaf.png

const About = () => {

  const leaf = `url(${Leafimage})`;

  return (
    <div style={{ backgroundColor: '#2E8B57', minHeight: 'auto', padding:"3rem 3rem" , borderTop: '2px solid black',  backgroundImage: leaf }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '800px', textAlign: 'center', padding: '2rem', borderRadius: '10px' }}>
          {/* Hero Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ color: '#f3f3f3', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Protect Your Plants with Ease</h1>
            <p style={{ color: '#f3f3f3', fontSize: '1.2rem', marginBottom: '2rem' }}>Helping you diagnose and treat plant diseases quickly and accurately.</p>
          </div>
          {/* How to Protect Plants Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Section 1 */}
            <div style={{ flex: '1', maxWidth: '30%', padding: '1rem', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
              <i className="fa fa-shield" style={{ fontSize: '2rem', color: '#008000' }} />
              <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Pest Control</h3>
              <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Keep pests away from your plants with proper pest control measures.</p>
            </div>
            {/* Section 2 */}
            <div style={{ flex: '1', maxWidth: '30%', padding: '1rem', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
              <i className="fa fa-tint" style={{ fontSize: '2rem', color: '#008000' }} />
              <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Watering</h3>
              <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Ensure proper watering practices to keep your plants hydrated and healthy.</p>
            </div>
            {/* Section 3 */}
            <div style={{ flex: '1', maxWidth: '30%', padding: '1rem', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
              <i className="fa fa-sun-o" style={{ fontSize: '2rem', color: '#008000' }} />
              <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Sunlight</h3>
              <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Provide adequate sunlight to your plants based on their specific requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;