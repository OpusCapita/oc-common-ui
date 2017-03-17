import React, { PropTypes } from 'react';
import {
  Col,
  FormGroup,
  Button,
  ControlLabel,
  InputGroup,
  FormControl,
} from 'react-bootstrap';


function SearchBar({ label, placeholder, action, horizontal }) {
  function getHorizontal() {
    return (
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          {label}
        </Col>
        <Col sm={10}>
          <InputGroup>
            <FormControl placeholder={placeholder} type="text" />
            <InputGroup.Button>
              <Button onClick={action}>Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </Col>
      </FormGroup>
    );
  }

  function getVertical() {
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <InputGroup>
          <FormControl placeholder={placeholder} type="text" />
          <InputGroup.Button>
            <Button onClick={action}>Search</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );
  }

  return (horizontal ? getHorizontal() : getVertical());
}

SearchBar.defaultProps = {
  placeholder: null,
  horizontal: false,
};

SearchBar.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  horizontal: PropTypes.bool,
};

export default SearchBar;
