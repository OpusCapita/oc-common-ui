import React, { PropTypes } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const ENTER = 13;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.value !== nextState.value) {
      return true;
    }
    return false;
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleOnKeyDown = (e) => {
    if (e.keyCode && e.keyCode === ENTER && this.isValid()) {
      this.handleSearch();
    }
  }

  handleSearch = () => {
    if (this.props.action) {
      this.props.action(this.state.value);
    }
  }

  isValid = () => {
    const isValid = (this.state.value || '').length > 0;
    return isValid;
  }

  render() {
    const isValid = this.isValid();
    return (
      <InputGroup>
        <FormControl
          placeholder={this.props.placeholder}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleOnKeyDown}
        />
        <InputGroup.Button>
          <Button onClick={this.handleSearch} disabled={!isValid}>Search</Button>
        </InputGroup.Button>
      </InputGroup>
    );
  }
}

SearchBar.defaultProps = {
  placeholder: null,
  horizontal: false,
  value: '',
};

SearchBar.propTypes = {
  action: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default SearchBar;
