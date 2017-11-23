import React from 'react';
import { ConfirmDialog } from '../../../src/index';

export default class ConfirmDialogView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmationDialog: true,
    };
  }

  hideConfirmDialog = () => {
    this.setState({
      showConfirmationDialog: false,
    });
  }

  render() {
    return (
      this.state.showConfirmationDialog &&
      <ConfirmDialog
        titleText="Confirmation"
        bodyText="Do you want to delete?"
        okButtonText="OK"
        cancelButtonText="Cancel"
        cancelCallback={this.hideConfirmDialog}
        confirmCallback={this.hideConfirmDialog}
      />
    );
  }
}

