import React, { useState, useEffect } from 'react';
import Mammals from './mammals';
import Birds from './birds';
import Reptiles from './reptiles';
import './App.css'; // Import the CSS file for chaotic animation

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [limit, setLimit] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
      )`;
      setBackgroundColor(randomColor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    margin: '0',
    backgroundColor: backgroundColor,
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '5px 0',
    cursor: 'pointer',
    width: '100px',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const imageStyle = {
    width: '300px',
    height: '300px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle} >
      <h1 style={headingStyle} >Welcome to Zaopark</h1>
      <button style={buttonStyle}  onClick={() => setActiveCategory('mammals')}>Mammals</button>
      <button style={buttonStyle}  onClick={() => setActiveCategory('birds')}>Birds</button>
      <button style={buttonStyle}  onClick={() => setActiveCategory('reptiles')}>Reptiles</button>
      <input
        type="number"
        value={limit}
        onChange={(dibil) => setLimit(parseInt(dibil.target.value, 10) || '')}
        className="chaotic"
        style={inputStyle}
      />
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
        className="chaotic"
        style={{ marginLeft: '10px' }}
      />

      {activeCategory === 'mammals' && <Mammals limit={limit} imageStyle={{...imageStyle, className: "chaotic"}} />}
      {activeCategory === 'birds' && <Birds limit={limit} imageStyle={{...imageStyle, className: "chaotic"}} />}
      {activeCategory === 'reptiles' && <Reptiles limit={limit} imageStyle={{...imageStyle, className: "chaotic"}} />}
    </div>
  );
}

export default App;
