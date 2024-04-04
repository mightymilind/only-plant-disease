import React, { useState, useRef } from 'react';
import Leafimage from '../assets/Leaf.png';

function Upload() {
  const leaf = `url(${Leafimage})`;
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const videoRef = useRef(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 6 * 1024 * 1024;

    if (selectedFile && allowedTypes.includes(selectedFile.type) && selectedFile.size <= maxSize) {
      setSelectedImage(URL.createObjectURL(selectedFile));
      // Implement logic to analyze the image and get result
      setResult("Your plant is likely suffering from X disease.");
    } else {
      if (!allowedTypes.includes(selectedFile.type)) {
        alert('Please upload an image in JPG, JPEG, or PNG format.');
      } else if (selectedFile.size > maxSize) {
        alert('Please upload an image smaller than 6MB.');
      }
      setSelectedImage(null);
      setResult(null);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  const handleCaptureImage = () => {
    setShowPopup(true);
    const constraints = {
      video: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(function (mediaStream) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = function (e) {
          videoRef.current.play();
        };
      })
      .catch(function (err) {
        console.log('Unable to access camera:', err);
      });
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const dataURL = canvas.toDataURL('image/jpeg');
    setSelectedImage(dataURL);
    setResult("Your plant is likely suffering from X disease.");
    setShowPopup(false);
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  const handleDownloadReport = () => {
    // Implement logic to download a report with the result
    console.log("Downloading report...");
  };

  return (
    <div id='upload' style={{ backgroundColor: '#d3f0e9', borderTop: '2px solid black', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '100vh', padding: '3rem 2rem', backgroundImage: leaf }}>
      {/* Hero Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#f3f3f3', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>How Does It Work?</h1>
        <p style={{ color: '#f3f3f3', fontSize: '1.2rem', marginBottom: '2rem' }}>Easily diagnose plant diseases with our simple and effective process.</p>
        {/* Image Upload Section */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
          <label htmlFor="image-upload" style={{ backgroundColor: '#008000', color: '#fff', padding: '1rem 2rem', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer', marginRight: '1rem' }}>Upload Image</label>
          <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
          <button onClick={handleCaptureImage} style={{ backgroundColor: '#008000', color: '#fff', padding: '1rem 2rem', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer', border: 'none', outline: 'none' }}>Capture Image</button>
          {selectedImage && <img src={selectedImage} alt="Uploaded plant" style={{ maxWidth: '300px', maxHeight: '200px', marginLeft: '2rem' }} />}
        </div>

        {/* Result Section */}
        {result && (
          <div style={{ borderRadius: '5px', padding: '1rem', marginBottom: '2rem' }}>
            <p style={{ color: '#f3f3f3', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold' }}>Result:</p>
            <p style={{ color: '#f3f3f3', fontSize: '1.2rem' }}>{result}</p>
            {/* Remedy Recommendation Section */}
            <div style={{ marginTop: '2rem' }}>
              <h2 style={{ color: '#f3f3f3', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem' }}>Remedy Recommendation:</h2>
              {/* Add your remedy recommendation component here */}
              <p style={{ color: '#f3f3f3', fontSize: '1.2rem' }}>Here you can display personalized treatment recommendations based on the detected disease.</p>
            </div>
            <button style={{ backgroundColor: '#008000', color: '#fff', padding: '1rem 2rem', borderRadius: '5px', cursor: 'pointer', marginTop: '1rem' }} onClick={handleDownloadReport}>Download Report</button>
          </div>
        )}
      </div>
      {/* Steps Section */}
      <div style={{ display: 'flex', paddingBottom: "3rem", justifyContent: 'center', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Step 1 */}
        <div style={{ flex: '1', maxWidth: '30%', padding: '1rem', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <i className="fa fa-camera" style={{ fontSize: '2rem', color: '#008000' }} />
          <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Upload a Photo</h3>
          <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Capture a clear image of the affected plant area.</p>
        </div>
        {/* Step 2 */}
        <div style={{ flex: '1', maxWidth: '30%', padding: '1rem', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <i className="fa fa-search" style={{ fontSize: '2rem', color: '#008000' }} />
          <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Advanced Analysis</h3>
          <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Our AI analyzes the image for disease patterns.</p>
        </div>
        {/* Step 3 */}
        <div style={{ flex: '1', maxWidth: '30%', padding: '1rem ', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <i className="fa fa-leaf" style={{ fontSize: '2rem', color: '#008000' }} />
          <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Get Results</h3>
          <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Receive a diagnosis and personalized treatment.</p>
        </div>
      </div>
      {/* Benefits Section */}
      <div id='why' style={{ textAlign: 'center', padding: '3rem', borderTop: '2px solid black', margin: '2rem auto' }}>
        <h2 style={{ color: '#f3f3f3', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Why Choose Us?</h2>
        <ul style={{ listStyle: 'none', padding: '0', margin: '1rem 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
          <li>
            <i className="fa fa-check-circle" style={{ color: '#f3f3f3' }} />
            <span style={{ marginLeft: '1rem', color: '#f3f3f3' }}>Fast and accurate diagnoses: Identify plant diseases quickly and confidently.</span>
          </li>
          {/* Add more benefits here if needed */}
          <li>
            <i className="fa fa-check-circle" style={{ color: '#008000' }} />
            <span style={{ marginLeft: '1rem', color: '#f3f3f3' }}>Easy-to-use interface: No expert knowledge needed, just upload a photo and get results.</span>
          </li>
          <li>
            <i className="fa fa-check-circle" style={{ color: '#008000' }} />
            <span style={{ marginLeft: '1rem', color: '#f3f3f3' }}>Personalized treatment recommendations: Get specific solutions to save your plants.</span>
          </li>
          <li>
            <i className="fa fa-check-circle" style={{ color: '#008000' }} />
            <span style={{ marginLeft: '1rem', color: '#f3f3f3' }}>Science-backed technology: Powered by advanced AI and plant disease expertise.</span>
          </li>
          <li>
            <i className="fa fa-check-circle" style={{ color: '#008000' }} />
            <span style={{ marginLeft: '1rem', color: '#f3f3f3' }}>Affordable and accessible: Protect your plants without breaking the bank.</span>
          </li>
        </ul>
      </div>
      {/* Popup for capturing image */}
      {showPopup && (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999' }}>
    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
      <button onClick={closePopup} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', outline: 'none' }}>X</button>
    </div>
    <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <video ref={videoRef} style={{ width: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }} autoPlay={true} />
      <button onClick={captureImage} style={{ backgroundColor: '#008000', color: '#fff', padding: '1rem 2rem', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer', border: 'none', outline: 'none' }}>Capture</button>
    </div>
  </div>
)}


    </div>
  );
}

export default Upload;