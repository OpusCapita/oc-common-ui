import React from 'react';
import Color from '../color/color-component.jsx';
import { Card, CardHeader, CardContent } from '../../../../src/index.js';

require('./colors.scss');

export default class Colors extends React.Component {
  getMainColors = () => {
    let colors = [
      { name: 'Orange', hex: '#EC6608', rgb: 'R233 G102 B8' },
      { name: 'Yellow', hex: '#FECA1D', rgb: 'R254 G202 B29' },
      { name: 'Azure', hex: '#67707C', rgb: 'R103 G112 B124' },
      { name: 'Red', hex: '#DD2515', rgb: 'R221 G37 B21' },
      { name: 'Black', hex: '#000000', rgb: 'R0 G0 B0' },
      { name: 'Petrol', hex: '#006070', rgb: 'R0 G96 B112' },      
    ];
    return colors;
  };

  getSecondaryColors = () => {
    let colors = [
      { name: 'Dark Steel', hex: '#3B4A56', rgb: 'R59 G74 B86' },
      { name: 'Gray', hex: '#CCCCCC', rgb: 'R204 G204 B204' },
      { name: 'Light Gray', hex: '#D3DADE', rgb: 'R211 G218 B222' },
      { name: 'Green', hex: '#3AA57B', rgb: 'R58 G165 B123' },
      { name: 'Blue', hex: '#16AED6', rgb: 'R22 G174 B214' },
      { name: 'Violet', hex: '#943BA3', rgb: 'R148 G59 B163' },      
    ];
    return colors;
  };

  render() {
    return (
      <Card expanded={true} id="Colors">
        <CardHeader>Color scheme</CardHeader>
        <CardContent>
          <p>
            The color scheme is based on selected OC brand colors, expanded with additional colors.
          </p>
          <h3>Selected brand colors</h3>
          <div className="oc-colors-container">
            { this.getMainColors().map((color) => {
              return <Color key={color.name} color={color}/>;
            })}
          </div>
          <h3>Additional colors</h3>
          <div className="oc-colors-container">
            { this.getSecondaryColors().map((color) => {
              return <Color key={color.name} color={color}/>;
            })}
          </div>
        </CardContent> 
      </Card>
    );
  }
}
