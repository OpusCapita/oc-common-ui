/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OCAlert } from './alert.component.jsx'; // eslint-disable-line import/extensions

import './alerts.scss';


const OCAlertsComponent = function OCAlertsComponent(props) {
  return (
    <div id="global-notification">
      { props.alerts.map((alert, i) =>
        <OCAlert key={i} {...alert} />,
      )}
    </div>
  );
};

OCAlertsComponent.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    translate: PropTypes.bool.isRequired,
    values: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
  })).isRequired,
};

const mapStateToProps = state => (
  { alerts: state.alertsReducer }
);

export const OCAlerts = connect(
  mapStateToProps,
)(OCAlertsComponent);
