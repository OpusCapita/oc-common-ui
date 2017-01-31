import React from 'react';
import { OCAlerts, OCAlert } from '../../src/index.js';

export default class AlertsView extends React.Component {
  render() {
    return (
      <div className="container">    
       <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <h1>Alerts</h1>
          </div>        
        </div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="btn-toolbar">
              <button type="button" className="btn btn-info" onClick={() => {
                OCAlert.alertInfo('alert info!');
              }}>Info</button>
              <button type="button" className="btn btn-success" onClick={() => {
                OCAlert.alertSuccess('alert success!');
              }}>Success</button>
              <button type="button" className="btn btn-warning" onClick={() => {
                OCAlert.alertWarning('alert warning!');
              }}>Warning</button>
              <button type="button" className="btn btn-danger" onClick={() => {
                OCAlert.alertError('alert error!');
              }}>Error</button>
            </div>
          </div>
        </div>
        <OCAlerts /> 
      </div>  
    );
  }
}
