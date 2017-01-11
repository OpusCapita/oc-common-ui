import React from 'react';

import { OCAlerts, OCAlert } from '../../src/index.js';


export default class AlertsView extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={() => {
            OCAlert.alertSuccess('alert success!');
          }}>
            Show success
        </button>
        <button
          onClick={() => {
            OCAlert.alertInfo('alert info!');
          }}>
            Show info
        </button>
        <button
          onClick={() => {
            OCAlert.alertWarning('alert warning!');
          }}>
            Show warning
        </button>
        <button
          onClick={() => {
            OCAlert.alertError('alert error!');
          }}>
            Show error
        </button>
        <OCAlerts />
      </div>
    );
  }
}
