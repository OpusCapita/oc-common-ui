import React from 'react';
import Logo from './logo.component.jsx';
import { Card, CardHeader, CardContent } from '../../../../src/index.js';
import { CONTENT } from './logos.constants';
var favIcon = require('../../../../images/favicon.ico');
require('./logos.scss');

export default class Logos extends React.Component {
  render() {
    return (
      <Card expanded={true} id="Logos">
        <CardHeader>{ CONTENT.topic }</CardHeader>
        <CardContent>
          <p>{ CONTENT.description }</p>
          <div className="oc-logos-container">
            <div className="oc-logos-item">
              <strong>{ CONTENT.extended }</strong>
              <div className="oc-logos-item-inverted" style={{height: 50, width: 275}}>
                <Logo inverted={true}/>
              </div>
            </div>
            <div className="oc-logos-item">
              <strong>{ CONTENT.minimised }</strong>
                <div className="oc-logos-item-inverted" style={{height: 50, width: 75}}>
                  <Logo inverted={true} minimised={true}/>
                </div>
            </div>
            <div className="oc-logos-item">
              <strong>{ CONTENT.extended }</strong>
              <Logo/>
            </div>
            <div className="oc-logos-item">
              <strong>{ CONTENT.minimised }</strong>
              <Logo minimised={true}/>
            </div>
             <div className="oc-logos-item">
              <div><strong>{ CONTENT.favicon }</strong></div>
              <div><img alt="OpusCapita favicon" src={favIcon} /></div>
            </div>
          </div>
        </CardContent> 
      </Card>
    );
  }
}
