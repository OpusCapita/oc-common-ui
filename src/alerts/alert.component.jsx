/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { FormattedMessage as M } from 'react-intl';
import { OCAlert as alertAction } from './alerts.actions';
import { Icon } from '../icons';

export class OCAlert extends React.Component {

  getMessage() {
    const elements = [];
    if (typeof this.props.message === 'object') {
      if (this.props.translate) {
        this.props.message.map((item, i) => {
          elements.push(
            <div key={i}><M id={item} /></div>,
          );
          return elements;
        });
      } else {
        this.props.message.map((item, i) => {
          elements.push(
            <div key={i}>{item}</div>,
          );
          return elements;
        });
      }
    } else if (this.props.translate) {
      elements.push(
        <M
          key={this.props.id}
          id={this.props.message}
          values={this.props.values || {}}
        />,
      );
    } else {
      return this.props.message;
    }
    return elements;
  }

  getIcon() {
    const names = {
      success: 'ok',
      info: 'exclamation',
      warning: 'alert',
      danger: 'error',
    };
    return (
      <Icon
        type="indicator"
        name={names[this.props.type]}
        width={38}
        height={38}
      />
    );
  }

  handleAlertDismiss = () => {
    alertAction.closeAlert(this.props.id);
  }

  render() {
    return (
      <Alert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
        <div className="alert-content">
          { this.getIcon() }
          <span>{this.getMessage()}</span>
        </div>
      </Alert>);
  }
}

OCAlert.defaultProps = {
  values: {},
};

OCAlert.propTypes = {
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
};
