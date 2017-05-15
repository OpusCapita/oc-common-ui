/* eslint-disable react/forbid-prop-types */
import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage as M } from 'react-intl';
import CellToolTip from './cell-tooltip.component';
import './inline-edit-controls.component.scss';

export default class InlineEditControls extends React.PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    idKeyPath: PropTypes.arrayOf(PropTypes.string),
    addNewItem: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    validateEditedRows: PropTypes.func.isRequired,
    validateCreatedRows: PropTypes.func.isRequired,
    isBusy: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    isCreating: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
    columnDefaultValues: PropTypes.object.isRequired,
    firstInvalidInput: PropTypes.object,
    onAddClick: PropTypes.func,
    disableActions: PropTypes.bool,
    inlineAdd: PropTypes.bool,
    tabIndex: PropTypes.number,
  };

  static defaultProps = {
    disableActions: false,
    inlineAdd: true,
    idKeyPath: [],
    firstInvalidInput: null,
    onAddClick: null,
    tabIndex: 1,
  };

  handleSaveButtonClick = () => {
    let valid = true;
    if (this.props.isEditing) {
      valid = this.props.validateEditedRows(
        this.props.id,
        this.props.idKeyPath,
        this.props.columns,
      );
    }
    if (valid && this.props.isCreating) {
      valid = this.props.validateCreatedRows(this.props.id, this.props.columns);
    }
    if (valid) {
      this.props.save(this.props.id, this.props.onSave);
    } else if (this.props.firstInvalidInput) {
      this.props.firstInvalidInput.focus();
    }
  }

  handleCancelButtonClick = () => {
    this.props.cancel(this.props.id);
    this.props.onCancel();
  }

  handleAddButtonClick = () => {
    this.props.addNewItem(this.props.id, this.props.columnDefaultValues);
  }

  handleEditButtonClick = () => {
    if (!this.props.disableActions) {
      this.props.edit(this.props.id);
    }
  }

  handleCreateButtonClick = () => {
    if (!this.props.disableActions) {
      if (this.props.onAddClick) {
        this.props.onAddClick();
      } else {
        this.props.create(this.props.id, this.props.columnDefaultValues);
      }
    }
  }

  render() {
    if (this.props.isCreating || this.props.isEditing) {
      return (
        <div className="oc-datagrid-inline-edit-controls">
          <Button
            disabled={this.props.isBusy || this.props.disableActions}
            onClick={this.handleSaveButtonClick}
            tabIndex={this.props.tabIndex + 1}
          >
            <M id="Save" />
          </Button>
          <Button
            disabled={this.props.isBusy || this.props.disableActions}
            onClick={this.handleCancelButtonClick}
            tabIndex={this.props.tabIndex + 2}
          >
            <M id="Cancel" />
          </Button>
          { this.props.isCreating &&
            <Button
              disabled={this.props.isBusy || this.props.disableActions}
              onClick={this.handleAddButtonClick}
              tabIndex={this.props.tabIndex + 3}
            >
              <M id="Add" />
            </Button>
          }
        </div>
      );
    }
    return (
      <div className="oc-datagrid-inline-edit-controls">
        <CellToolTip
          id={`oc-datagrid-controls-tooltip-${this.props.id}`}
          messageId={this.props.disableActions ? 'GridActionsDisabledOtherGridBusy' : undefined}
        >
          <Button
            disabled={this.props.isBusy}
            onClick={this.handleEditButtonClick}
          >
            <M id="Edit" />
          </Button>
          { this.props.inlineAdd &&
            <Button
              disabled={this.props.isBusy}
              onClick={this.handleCreateButtonClick}
            >
              <M id="Add" />
            </Button>
          }
        </CellToolTip>
      </div>
    );
  }
}
