import React from 'react';
import './ShinyText.css';

// Reusable animated shiny gradient text
// Props:
// - text: string to display
// - disabled: if true, disables the shine animation
// - speed: animation speed multiplier (higher = faster)
// - className: extra classes
const ShinyText = ({ text = '', disabled = false, speed = 3, className = '' }) => {
  const style = {
    '--shine-duration': `${Math.max(0.5, 4 / Math.max(0.5, speed))}s`,
  };
  return (
    <span
      className={`shiny-text ${disabled ? 'shiny-text--disabled' : ''} ${className}`}
      style={style}
    >
      {text}
    </span>
  );
};

export default ShinyText;
