import React from 'react';

const ColorDisplay = ({ color }) => {
  // Convert HEX to RGB
  const hexToRgb = (hex) => {
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbColor = hexToRgb(color);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
<div style={{ backgroundColor: color, width: '150px', height: '150px', marginBottom: '10px', boxShadow: '0px 0px 10px 0px black' }}>      
      </div>
      <div style={{ fontWeight: 'bold' }}>
       <div> Hex: {color}<br /></div>
        {/* RGB: {rgbColor ? `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}` : 'Invalid Color'} */}
        <div>R: {rgbColor ? `${rgbColor.r}`:``}</div>
        <div>G: {rgbColor ? `${rgbColor.g}`:``}</div>
        <div>B: {rgbColor ? `${rgbColor.b}`:``}</div>
      </div>
    </div>
  );
};

export default ColorDisplay;
