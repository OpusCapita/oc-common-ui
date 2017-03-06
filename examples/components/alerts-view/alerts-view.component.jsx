import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { OCAlerts, OCAlert } from '../../../src/index';

function AlertsView() {
  return (
    <div className="oc-content">
      <h1>Alerts</h1>
      <p>Use alerts for showing semantic notifications to the end user.</p>
      <h2>Usage</h2>
      <p>
        Include single OCAlerts component in main container of the application.
      </p>
      <ButtonToolbar>
        <Button
          bsStyle="info" onClick={() => {
            OCAlert.alertInfo('alert info!');
          }}
        >Info</Button>
        <Button
          bsStyle="success" onClick={() => {
            OCAlert.alertSuccess('alert success!');
          }}
        >Success</Button>
        <Button
          bsStyle="warning" onClick={() => {
            OCAlert.alertWarning('alert warning!');
          }}
        >Warning</Button>
        <Button
          bsStyle="danger" onClick={() => {
            OCAlert.alertError('alert error!');
          }}
        >Error</Button>
      </ButtonToolbar>
      <OCAlerts />
    </div>
  );
}

export default AlertsView;
