/* eslint-disable react/no-array-index-key */

import React, { PropTypes } from 'react';
import {
  Checkbox,
  FormControl,
} from 'react-bootstrap';

import SelectedListItem from './selected-list-item.component';

import './selected-list.component.scss';


class SelectedList extends React.Component {

  pinToAccountGroups = (event) => {
    this.setState({
      pinToAccountGroups: event.target.checked,
    });
  };

  render() {
    return (
      <span id="selected-list">
        <span id="bank-account-group">
          <span><b>Bank account group name</b></span>
          <Checkbox
            checked={this.props.pinToAccountGroupsCheck}
            onChange={this.props.pinToAccountGroups}
          >
            Pin to my account groups
          </Checkbox>
        </span>
        <FormControl
          id="new-group-field"
          componentClass="input"
          placeholder={this.props.groupName}
          onChange={this.props.setGroupName}
        />
        <br />
        <span><b>Selected bank accounts</b></span>
        <div id="selected-bank-accounts">
          <ul className="selected-bank-account-list-item">
            {this.props.selectedList.map((item, i) => (
              <SelectedListItem
                key={i}
                item={item}
                unmark={this.props.unmark}
              />
            ))}
          </ul>
        </div>
      </span>
    );
  }
}

SelectedList.propTypes = {
  pinToAccountGroups: PropTypes.func.isRequired,
  pinToAccountGroupsCheck: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired,
  setGroupName: PropTypes.func.isRequired,
  selectedList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    all: PropTypes.bool,
    path: PropTypes.array,
    accounts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      index: PropTypes.number,
    })),
  }).isRequired).isRequired,
  unmark: PropTypes.func.isRequired,
};

export default SelectedList;
