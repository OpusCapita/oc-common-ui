import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';
import { FormattedMessage as M } from 'react-intl';
import { OCAlert as alertAction } from './alerts.actions.js';

export class OCAlert extends React.Component {
  handleAlertDismiss = () => {
    alertAction.closeAlert(this.props.id);
  }

  getMessage() {
    if (typeof this.props.message === 'object') {
      if (this.props.translate) {
        let elements = [];
        this.props.message.map((item, i) => {
          elements.push(
            <div key={i}><M id={item} /></div>
          );
        });
        return elements;
      } else {
        let elements = [];
        this.props.message.map((item, i) => {
          elements.push(
            <div key={i}>{item}</div>
          );
        });
        return elements;
      }
    } else {
      if (this.props.translate) {
        return <M id={this.props.message} values={this.props.values || {}} />;
      } else {
        return this.props.message;
      }
    }
  }

  render() {
    return (
      <Alert bsStyle={this.props.type} onDismiss={this.handleAlertDismiss}>
        {this.getMessage()}
      </Alert>);
  }
}

OCAlert.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.any.isRequired,
  translate: PropTypes.bool.isRequired,
  values: PropTypes.object,
};
