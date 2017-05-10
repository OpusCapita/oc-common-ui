/* eslint-disable react/no-array-index-key */

import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { FormControl } from 'react-bootstrap';

import { DropdownContainer } from '../dropdown-container/index';
import { MultiSelect } from '../multi-select/index';
import './dropdown-multi-select.component.scss';

export default class DropdownMultiSelect extends React.PureComponent {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
    checkedItems: ImmutablePropTypes.map,
    onChange: PropTypes.func,
    titleDefault: PropTypes.string,
  };

  static defaultProps = {
    checkedItems: Map(),
    onChange: () => {},
    titleDefault: '{N} items selected',
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: false, filterValue: '' };
  }

  getTitle = (checkedItems, items, title) => {
    if (checkedItems.size === 0 || checkedItems.size > 1) {
      return title.replace('{N}', checkedItems.size);
    }
    if (checkedItems.size === 1) {
      const [...keys] = checkedItems.keys();
      const index = items.findIndex(i => i.id === keys[0]);
      if (index > -1) {
        return items[index].text;
      }
    }
    return '';
  }

  setFilter = (e) => {
    this.setState({ filterValue: e.target.value });
  }

  filterItems = (items) => {
    const searchValue = this.state.filterValue.replace(/\s/g, '').toLowerCase();
    const filteredItems = items.filter(i => i.text.replace(/\s/g, '').toLowerCase().includes(searchValue));
    return filteredItems;
  }

  handleToggle = (newValue) => {
    if (newValue && this.state.filterValue !== '') {
      this.setState({ isOpen: true });
    } else if (!newValue && this.state.filterValue !== '') {
      this.setState({ isOpen: newValue, filterValue: '' });
    } else {
      this.setState({ isOpen: newValue });
    }
  }

  render() {
    const { items, checkedItems, onChange, titleDefault, ...otherProps } = this.props;
    const title = (
      <FormControl
        type="text"
        placeholder={this.getTitle(checkedItems, items, titleDefault)}
        onChange={this.setFilter}
        value={this.state.filterValue}
      />
    );
    const filteredItems = this.state.filterValue === '' ? items : this.filterItems(items);
    return (
      <div className="oc-dropdown-multi-select">
        <DropdownContainer
          isOpen={this.state.isOpen}
          noCaret
          onToggle={this.handleToggle}
          title={title}
          {...otherProps}
        >
          <MultiSelect
            items={filteredItems}
            checkedItems={checkedItems}
            onChange={onChange}
          />
        </DropdownContainer>
      </div>
    );
  }
}
