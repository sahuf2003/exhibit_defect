import React from 'react';

export const Slider = ({ value, onValueChange, max, step }) => (
  <input
    type="range"
    value={value}
    onChange={(e) => onValueChange([Number(e.target.value)])}
    max={max}
    step={step}
    className="form-slider"
  />
);
