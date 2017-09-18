import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import { FormControl, InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import KEY_CODES from '../constants/key-codes.constant';
import { DropdownContainer } from '../dropdown-container/index';
import { MultiSelect } from '../multi-select/index';
import './dropdown-multi-select.component.scss';

export default class DropdownMultiSelect extends React.PureComponent {

  static propTypes = {
    checkedItems: ImmutablePropTypes.list,
    defaultPlaceholder: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        labelPlaceholder: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
      }),
    ).isRequired,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    checkedItems: List(),
    defaultPlaceholder: '{N} items selected',
    onChange: () => {},
    tabIndex: 1,
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
      const index = items.findIndex(i => i.value === checkedItems.get(0));
      if (index > -1) {
        return items[index].labelPlaceholder !== undefined ?
          items[index].labelPlaceholder : items[index].label;
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
    return items.filter(i => i.label.replace(/\s/g, '').toLowerCase().match(filterValue) !== null);
  }

  handleClear = () => {
    this.preventToggle = true;
    if (this.props.checkedItems.size > 0) {
      this.props.onChange(List());
    }
  }

  handleKeyDown = (e) => {
    if (e.keyCode === KEY_CODES.DOWN) {
      this.setState({ isOpen: true });
      document.activeElement.blur();
    }
  }

  handleToggle = (isOpen) => {
    if (this.preventToggle) {
      this.preventToggle = false;
    } else if (!isOpen && this.state.filterValue !== '') {
      this.setState({ isOpen, filterValue: '' });
    } else {
      this.setState({ isOpen });
    }
  }

  render() {
    const {
      items,
      checkedItems,
      onChange,
      defaultPlaceholder,
      tabIndex,
      ...otherProps
    } = this.props;
    const title = (
      <InputGroup>
        <FormControl
          type="text"
          placeholder={this.getPlaceholder(checkedItems, items, defaultPlaceholder)}
          onChange={this.setFilter}
          onKeyDown={e => this.handleKeyDown(e)}
          tabIndex={tabIndex}
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
          useAnchor
          {...otherProps}
        >
          <MultiSelect
            checkedItems={checkedItems}
            isRendered={this.state.isOpen}
            items={filteredItems}
            onChange={onChange}
          />
        </DropdownContainer>
      </div>
    );
  }
}
