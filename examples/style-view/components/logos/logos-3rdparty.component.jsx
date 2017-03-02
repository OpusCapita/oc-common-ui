import React from 'react';
import Logo from './logo.component.jsx';
import { Card, CardHeader, CardContent } from '../../../../src/index.js';
import CONTENT from './logos-3rdparty.constants.js';

require('./logos.scss');

function Logos3rdParty() {
  const productName = 'Name of the product';

  return (
    <Card expanded id="Logos">
      <CardHeader>{ CONTENT.topic }</CardHeader>
      <CardContent>
        <p>{ CONTENT.description }</p>
        <div className="oc-logos-container">
          <div className="oc-logos-item">
            <strong>{ CONTENT.beneath }</strong>
            <Logo text={productName} />
          </div>
          <div className="oc-logos-item">
            <strong>{ CONTENT.side }</strong>
            <Logo text={productName} horizontal />
          </div>
          <div className="oc-logos-item">
            <strong>{ CONTENT.dark }</strong>
            <Logo text={productName} dark />
          </div>
          <div className="oc-logos-item">
            <Logo text={productName} dark horizontal />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Logos3rdParty;

