import React from 'react';
import { STATUS } from './callout.constants';

require('./callout.scss');

export default class Callout extends React.Component {
  getClassName = (status) => {
    let className = 'oc-callout ';
    switch (status) {
      case STATUS.PRIMARY:
        className += 'oc-callout-primary';
        break;
      case STATUS.SUCCESS:
        className += 'oc-callout-success';
        break;
      case STATUS.ERROR:
        className += 'oc-callout-error';
        break;
      case STATUS.WARNING:
        className += 'oc-callout-warning';
        break;
      case STATUS.INFO:
        className += 'oc-callout-info';
        break;
      default:
        className += 'oc-callout-default';
        break;
    }

    return className;
  }
  render() {
    return (
      <div className={this.getClassName(this.props.status)}>
        <h4>{this.props.header }</h4>
        { this.props.children }
      </div>
    );
  }
}
