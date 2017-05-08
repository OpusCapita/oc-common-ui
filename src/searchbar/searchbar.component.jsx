import React, { PropTypes } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

import KEY_CODES from '../constants/key-codes.constant';

class SearchBar extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.value !== nextProps.value) {
      return true;
    }
    return false;
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  handleOnKeyDown = (e) => {
    if (e.keyCode && e.keyCode === KEY_CODES.ENTER && this.isValid()) {
      this.handleSearch();
    }
  }

  handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.props.value);
    }
  }

  isValid = () => {
    const isValid = (this.props.value || '').length > 0;
    return isValid;
  }

  render() {
    const isValid = this.isValid();
    const style = {
      height: 34,
    };

    return (
      <InputGroup>
        <FormControl
          placeholder={this.props.placeholder}
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          onKeyDown={this.handleOnKeyDown}
        />
        <InputGroup.Button>
          <Button onClick={this.handleSearch} disabled={!isValid} style={style}>
            <svg
              viewBox="0 0 16.83 16.46" width="17" height="17"
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
  }
}

SearchBar.defaultProps = {
  placeholder: null,
  value: '',
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default SearchBar;
