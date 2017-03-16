import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SearchBar from '../searchbar/searchbar.component';

class ExtendedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <span>
        <SearchBar label={this.props.label} action={this.open} horizontal={this.props.horizontal} />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

ExtendedSearch.defaultProps = {
  placeholder: null,
  horizontal: false,
};

ExtendedSearch.propTypes = {
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  horizontal: PropTypes.bool,
};

export default ExtendedSearch;
