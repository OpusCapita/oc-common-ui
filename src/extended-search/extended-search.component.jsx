/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, ControlLabel, FormGroup, Col } from 'react-bootstrap';
import SearchBar from '../searchbar/searchbar.component';

class ExtendedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      value: '',
    };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  select = (selection) => {
    this.setState({ showModal: false, value: selection.name });
    this.props.callback(selection);
  }

  render() {
    return (
      <span>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            {this.props.label}
          </Col>
          <Col sm={10}>
            <SearchBar onSearch={this.open} value={this.state.value} onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <Modal show={this.state.showModal} onHide={this.close} {...this.props.modal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              React.Children.map(this.props.children,
                (child) => {
                  React.cloneElement(child, { select: this.select });
                },
              )
            }
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

ExtendedSearch.defaultProps = {
  placeholder: null,
  title: null,
  modal: null,
  children: null,
};

ExtendedSearch.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  callback: PropTypes.func.isRequired,
  modal: PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default ExtendedSearch;
