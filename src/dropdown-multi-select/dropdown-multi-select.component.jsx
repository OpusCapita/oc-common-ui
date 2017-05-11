import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import { FormControl, InputGroup } from 'react-bootstrap';

import { DropdownContainer } from '../dropdown-container/index';
import { MultiSelect } from '../multi-select/index';
import { Icon } from '../icons';
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
    this.preventToggle = false;
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
    const filterValue = e.target.value;
    if (filterValue !== '' && !this.state.isOpen) {
      this.setState({ filterValue, isOpen: true });
    } else {
      this.setState({ filterValue });
    }
  }

  filterItems = (items) => {
    const filterValue = this.state.filterValue.replace(/\s/g, '').toLowerCase();
    return items.filter(i => i.text.replace(/\s/g, '').toLowerCase().match(filterValue) !== null);
  }

  handleClear = () => {
    this.preventToggle = true;
    if (this.props.checkedItems.size > 0) {
      this.props.onChange(Map());
    }
  }

  handleToggle = (newValue) => {
    if (this.preventToggle) {
      this.preventToggle = false;
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
        <InputGroup.Addon
          className="oc-input-group-icon-remove"
          onClick={this.handleClear}
        >
          <Icon
            type="indicator"
            name="remove"
            width={17}
            height={17}
          />
        </InputGroup.Addon>
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
