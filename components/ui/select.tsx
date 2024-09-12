import React from 'react';

export const Select = ({ children, ...props }) => (
  <select {...props} className="form-select">
    {children}
  </select>
);

export const SelectTrigger = ({ children, ...props }) => (
  <div {...props} className="form-select-trigger">
    {children}
  </div>
);

export const SelectValue = ({ children }) => (
  <span className="form-select-value">{children}</span>
);

export const SelectContent = ({ children }) => (
  <div className="form-select-content">
    {children}
  </div>
);

export const SelectItem = ({ value, children }) => (
  <option value={value} className="form-select-item">
    {children}
  </option>
);
