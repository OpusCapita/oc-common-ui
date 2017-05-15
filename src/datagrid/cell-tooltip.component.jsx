/* eslint-disable react/forbid-prop-types, prefer-template */
import React, { PropTypes } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FormattedMessage as M } from 'react-intl';
import classNames from 'classnames';

export default class DatagridTooltip extends React.Component {

  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    children: PropTypes.node,
    isError: PropTypes.bool,
    isWarning: PropTypes.bool,
    messageId: PropTypes.string,
    messageValues: PropTypes.object,
    errorMessageId: PropTypes.string,
    errorMessageValues: PropTypes.object,
    warningMessageId: PropTypes.string,
    warningMessageValues: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    isError: false,
    isWarning: false,
    messageId: null,
    messageValues: {},
    errorMessageId: null,
    errorMessageValues: {},
    warningMessageId: null,
    warningMessageValues: {},
  };

  render() {
    const {
      children,
      id,
      isError,
      isWarning,
      messageId,
      messageValues,
      errorMessageId,
      errorMessageValues,
      warningMessageId,
      warningMessageValues,
    } = this.props;
    let overlayAttrs = {
      overlay: <Tooltip id={'Tooltip_' + id} style={{ display: 'none' }} />,
    };
    const message = {
      id: errorMessageId || warningMessageId || messageId || false,
      values: errorMessageValues || warningMessageValues || messageValues || {},
    };
    if (message.id) {
      let tooltipClassName = 'tooltip';
      if (isError) {
        tooltipClassName = 'error tooltip';
      }
      if (isWarning) {
        tooltipClassName = 'warning tooltip';
      }
      overlayAttrs = {
        placement: 'bottom',
        overlay: (
          <Tooltip id={'Tooltip_' + id} bsClass={tooltipClassName}>
            <M id={message.id} values={message.values} />
          </Tooltip>
        ),
      };
    }
    const wrapperClassName = classNames({
      'oc-datagrid-tooltip': true,
      error: isError,
      warning: isWarning,
    });
    return (
      <OverlayTrigger {...overlayAttrs}>
        <div className={wrapperClassName}>
          { children }
        </div>
      </OverlayTrigger>
    );
  }
}
