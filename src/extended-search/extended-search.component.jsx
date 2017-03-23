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

  select = (selection) => {
    this.setState({ showModal: false });
    this.props.callback(selection);
  }

  render() {
    return (
      <span>
        <SearchBar label={this.props.label} action={this.open} horizontal={this.props.horizontal} />
        <Modal show={this.state.showModal} onHide={this.close} {...this.props.modal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              React.Children.map(this.props.children,
                (child) => React.cloneElement(child, {
                  select: this.select
                })
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
  horizontal: false,
  modal: null
};

ExtendedSearch.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  callback: PropTypes.func.isRequired,
  horizontal: PropTypes.bool,
  modal: PropTypes.object,
};

export default ExtendedSearch;
