import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './App.css'

const ColorPicker = ({ onSelectColor }) => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    onSelectColor(newColor.hex);
  };

  return (
    <div style={{justifyContent:'center'}} >
      <SketchPicker
        color={color}
        onChange={handleColorChange}
        styles={{ picker: { width: '80%', maxWidth: '500px' }, 
        
      }}
      />
    </div>
  );
};

export default ColorPicker;
