import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { OCAlert } from './alert.component.jsx';

import './alerts.scss';


class OCAlertsComponent extends React.Component {
  render() {
    return (
      <div id="global-notification">
        { this.props.alerts.map((alert, i) =>
          <OCAlert key={i} { ...alert } />
        )}
      </div>);
  }
}

OCAlertsComponent.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state /*, props*/) => {
  return {
    alerts: state.alertsReducer,
  };
};

export const OCAlerts = connect(
  mapStateToProps,
)(OCAlertsComponent);
