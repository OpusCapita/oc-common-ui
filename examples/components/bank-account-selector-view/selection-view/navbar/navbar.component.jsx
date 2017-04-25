import React, { PropTypes } from 'react';
import {
  Nav,
} from 'react-bootstrap';


const Navbar = function Navbar(props) {
  return (
    <Nav id="bank-account-selector-navbar">
      <h4>Select bank accounts</h4>
      <span className="nav-divider-growing" />
      <button
        type="button"
        className="btn btn-default"
        onClick={() => {
          props.newSelection();
        }}
      >
        Use
      </button>
      <button
        type="button"
        className="btn btn-default"
        onClick={props.toggleSelect}
      >
        Cancel
      </button>
    </Nav>
  );
};

Navbar.propTypes = {
  newSelection: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default Navbar;
