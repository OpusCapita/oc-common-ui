import React from 'react';
import Logo from './logo.component.jsx';
import { Card, CardHeader, CardContent } from '../../../../src/index.js';
import { CONTENT } from './logos-3rdparty.constants.js';

require('./logos.scss');

export default class Logos3rdParty extends React.Component {
  render() {
    const productName = 'Name of the product';

    return (
      <Card expanded={true} id="Logos">
        <CardHeader>{ CONTENT.topic }</CardHeader>
        <CardContent>
          <p>{ CONTENT.description }</p>
          <div className="oc-logos-container">
            <div className="oc-logos-item">
              <strong>{ CONTENT.beneath }</strong>
              <Logo product={productName}/>
            </div>
            <div className="oc-logos-item">
              <strong>{ CONTENT.side }</strong>
              <Logo product={productName} horizontal={true}/>
            </div>
            <div className="oc-logos-item">
              <strong>{ CONTENT.dark }</strong>
              <Logo product={productName} dark={true}/>
            </div>
            <div className="oc-logos-item">
              <Logo product={productName} dark={true} horizontal={true}/>
            </div>
          </div>
        </CardContent> 
      </Card>
    );
  }
}
