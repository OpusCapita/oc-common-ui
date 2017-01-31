import React from 'react';
require('./color.scss');

export default class Color extends React.Component {
  render() {
    return (
      <div className="oc-color-container">
        <div className="oc-circle" style={ {backgroundColor: this.props.color.hex } }/>
        <div className="oc-color-info">
          <div className="oc-color-info-name">{this.props.color.name}</div>
          <div className="oc-color-info-hex">{this.props.color.hex}</div>
          <div className="oc-color-info-rgb">{this.props.color.rgb}</div>
        </div>
      </div>
    );
  }
}
