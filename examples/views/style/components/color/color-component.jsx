import React, { PropTypes } from 'react';

require('./color.scss');

function Color({ color }) {
  return (
    <div className="oc-color-container">
      <div className="oc-circle" style={{ backgroundColor: color.hex }} />
      <div className="oc-color-info">
        <div className="oc-color-info-name">{color.name}</div>
        <div className="oc-color-info-hex">{color.hex}</div>
        <div className="oc-color-info-rgb">{color.rgb}</div>
      </div>
    </div>
  );
}

Color.propTypes = {
  color: PropTypes.shape({
    hex: PropTypes.string,
    name: PropTypes.string,
    rgb: PropTypes.string,
  }).isRequired,
};

export default Color;

