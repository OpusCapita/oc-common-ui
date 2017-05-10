import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

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
      textSelected: PropTypes.string,
    })).isRequired,
    checkedItems: ImmutablePropTypes.map,
    defaultPlaceholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checkedItems: Map(),
    defaultPlaceholder: '{N} items selected',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: false, filterValue: '' };
  }

  getPlaceholder = (checkedItems, items, defaultPlaceholder) => {
    if (checkedItems.size === 0 || checkedItems.size > 1) {
      return defaultPlaceholder.replace('{N}', checkedItems.size);
    }
    if (checkedItems.size === 1) {
      const [...keys] = checkedItems.keys();
      const index = items.findIndex(i => i.id === keys[0]);
      if (index > -1) {
        return items[index].textSelected !== undefined ?
          items[index].textSelected : items[index].text;
      }
    }
    return defaultPlaceholder.replace('{N}', '1');
  }

  setFilter = (e) => {
    this.setState({ filterValue: e.target.value });
  }

  filterItems = (items) => {
    const searchValue = this.state.filterValue.replace(/\s/g, '').toLowerCase();
    const filteredItems = items.filter(i => i.text.replace(/\s/g, '').toLowerCase().includes(searchValue));
    return filteredItems;
  }

  handleClear = () => {
    console.log('handle clear');
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
    const { items, checkedItems, onChange, defaultPlaceholder, ...otherProps } = this.props;
    const title = (
      <InputGroup>
        <FormControl
          type="text"
          placeholder={this.getPlaceholder(checkedItems, items, defaultPlaceholder)}
          onChange={this.setFilter}
          value={this.state.filterValue}
        />
        <InputGroup.Button>
          <Button onClick={this.handleClear}>
            <svg
              viewBox="0 0 16.83 16.46" width="14" height="14"
            ><defs>
              <style>
                { `.oc-searchbar-icon
                  {
                    fill:#FFFFFF;
                  }`
                }
              </style></defs><title>Search</title><path className="oc-searchbar-icon" d="M16.19,14.38,11.85,10A6.21,6.21,0,0,0,2.42,2,6.22,6.22,0,0,0,6.81,12.62a6.16,6.16,0,0,0,3.63-1.18l4.34,4.34a1,1,0,0,0,1.41-1.41Zm-12.36-5a4.21,4.21,0,1,1,3,1.24A4.19,4.19,0,0,1,3.83,9.39Z" />
            </svg>
          </Button>
        </InputGroup.Button>
      </InputGroup>
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
