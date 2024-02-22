import React from 'react';
import data from './data';
import './App.css'; // Ensure this is the correct path to your CSS file

function Mammals({ limit }) {
  const imageSizeStyle = {
    width: '250px',
    height: '250px',
  };

  return (
    <div>
      {data.mammals.slice(0, limit || data.mammals.length).map(animal => (
        <div key={animal.id}>
          <h3>{animal.name}</h3>
          <img src={animal.image} alt={animal.name} style={imageSizeStyle} className="chaotic" />
        </div>
      ))}
    </div>
  );
}

export default Mammals;
