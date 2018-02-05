import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { DropdownContainer } from '@opuscapita/react-dropdown-container';
import { List } from 'immutable';

import KEY_CODES from '../constants/key-codes.constant';
import { MultiSelect } from '../multi-select/index';
import TitleInput from './title-input/title-input.component';
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
    this.state = { isOpen: false, isFocusOnChild: false, filterValue: '' };
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

  blurInput = () => {
    this.handleToggle(true);
    if (this.props.items.length > 0) {
      document.activeElement.blur();
      this.setState({ isFocusOnChild: true });
    }
  }

  filterItems = (items) => {
    const filterValue = this.state.filterValue.replace(/\s/g, '').toLowerCase();
    return items.filter(i => i.label.replace(/\s/g, '').toLowerCase().match(filterValue) !== null);
  }

  focusInput = () => {
    this.handleToggle(false);
    const element = document.getElementById(`input_${this.props.id}`);
    element.focus();
  }

  handleClear = () => {
    this.preventToggle = true;
    if (this.props.checkedItems.size > 0) {
      this.props.onChange(List());
    }
  }

  handleKeyDown = (e) => {
    if (e.keyCode === KEY_CODES.DOWN) {
      this.blurInput();
    }
  }

  handleToggle = (isOpen) => {
    if (this.preventToggle) {
      this.preventToggle = false;
    } else if (!isOpen && this.state.filterValue !== '') {
      this.setState({ isOpen, isFocusOnChild: isOpen, filterValue: '' });
    } else if (!isOpen) {
      this.setState({ isOpen, isFocusOnChild: isOpen });
    } else {
      this.setState({ isOpen });
    }
  }

  render() {
    const {
      id,
      items,
      checkedItems,
      onChange,
      defaultPlaceholder,
      tabIndex,
      ...otherProps
    } = this.props;
    const input = (
      <FormControl
        className="oc-input-group-input"
        id={`input_${id}`}
        placeholder={this.getPlaceholder(checkedItems, items, defaultPlaceholder)}
        onChange={this.setFilter}
        onMouseDown={this.focusInput}
        onKeyDown={this.handleKeyDown}
        tabIndex={tabIndex}
        type="text"
        value={this.state.filterValue}
      />
    );
    const title = (
      <TitleInput
        input={input}
        onClear={this.handleClear}
      />
    );
    const filteredItems = this.state.filterValue === '' ? items : this.filterItems(items);
    return (
      <div className="oc-dropdown-multi-select">
        <DropdownContainer
          id={id}
          isOpen={this.state.isOpen}
          noCaret
          onToggle={this.handleToggle}
          title={title}
          useAnchor
          {...otherProps}
        >
          <MultiSelect
            checkedItems={checkedItems}
            items={filteredItems}
            isFocused={this.state.isFocusOnChild}
            onChange={onChange}
            onParentFocus={this.focusInput}
          />
        </DropdownContainer>
      </div>
    );
  }
}
