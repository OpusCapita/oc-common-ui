import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';
import { FormattedMessage as M } from 'react-intl';
import { OCAlert as alertAction } from './alerts.actions.js';
import { Icon } from '../icons';

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

OCAlert.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired,
  message: PropTypes.any.isRequired,
  translate: PropTypes.bool.isRequired,
  values: PropTypes.object,
};
