/* eslint-disable react/no-string-refs */
import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

require('./confirm-dialog.scss');

class ConfirmDialog extends React.PureComponent {
  render() {
    const modalInstance = (
      <div id="oc-confirm-dialog" >
        <Modal show>
          <Modal.Header>
            <Modal.Title>{this.props.titleText}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="oc-confirm-dialog-body" ref="confirmDialogBody">
            {this.props.bodyText}
          </Modal.Body>
          <Modal.Footer>
            <Button id="confirm-button" ref="confirmButton" bsStyle="primary" onClick={this.props.confirmCallback}>
              {this.props.okButtonText}
            </Button>
            {this.props.thirdButtonCallback && <Button id="third-button" ref="thirdButton" onClick={this.props.thirdButtonCallback}>
              {this.props.thirdButtonText}
            </Button>
            }
            <Button id="cancel-button" ref="cancelButton" onClick={this.props.cancelCallback}>
              {this.props.cancelButtonText}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    return (
      <div>
        {modalInstance}
      </div>
    );
  }
}

ConfirmDialog.propTypes = {
  titleText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  bodyText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  cancelCallback: PropTypes.func.isRequired,
  confirmCallback: PropTypes.func.isRequired,
  thirdButtonCallback: PropTypes.func,
  okButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  cancelButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  thirdButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

ConfirmDialog.defaultProps = {
  thirdButtonCallback: undefined,
  thirdButtonText: undefined,
};

export default ConfirmDialog;
