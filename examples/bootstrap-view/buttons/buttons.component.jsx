import React from 'react';
import { Card, CardHeader, CardContent } from '../../../src/index.js';
import { ButtonToolbar, Button, Modal, OverlayTrigger } from 'react-bootstrap';
import { CONTENT } from './buttons.constants';

require('../../../styles/_table.scss');

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  examples = () => {
    return (
      <div>
        <div className="oc-margin-bottom">
          <h5>{ CONTENT.enabled }</h5>
          <ButtonToolbar>
              <Button>Default</Button>
              <Button bsStyle="primary">Primary</Button>
              <div hidden={true}>
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="link">Link</Button>
              </div>
            </ButtonToolbar>   
          </div>
          <div className="oc-margin-bottom">
            <h5>{ CONTENT.disabled }</h5>
            <ButtonToolbar>
              <Button disabled={true}>Default</Button>
              <Button bsStyle="primary" disabled={true}>Primary</Button>
              <div hidden={true}>
                <Button bsStyle="success" disabled={true}>Success</Button>
                <Button bsStyle="info" disabled={true}>Info</Button>
                <Button bsStyle="warning" disabled={true}>Warning</Button>
                <Button bsStyle="danger" disabled={true}>Danger</Button>
                <Button bsStyle="link" disabled={true}>Link</Button>
              </div>
            </ButtonToolbar>  
          </div>
      </div>
    );
  }

  guidelines = () => {
    return (
      <div>
        <h4>
          {CONTENT.topic}
        </h4>
        <div>
          <ul>
          { CONTENT.guidelines.map((guideline, index) => {
            return (<li key={index}>{guideline}</li>);
          })}
          </ul>
        </div>
        <h4>
          { CONTENT.labels.topic }
        </h4>
        <div>
          <Button onClick={this.open}>
            Labels
          </Button>
        </div>
      </div>
    );
  }

  modal = () => {
    return (
      <Modal show={this.state.showModal} onHide={this.close} bsSize='large'>
          <Modal.Header closeButton>
            <Modal.Title>{CONTENT.labels.topic}</Modal.Title>
          </Modal.Header>
          <Modal.Body>       
            <table className="oc-table">
              <thead>
                <tr>
                  <th>{CONTENT.labels.headers.label}</th>
                  <th>{CONTENT.labels.headers.for}</th>                 
                </tr>
              </thead>
              <tbody>
                { CONTENT.labels.examples.map((example, index) => {
                  return (<tr>
                    <td>{ example.label }</td>
                    <td>{ example.for }</td>
                  </tr>)
                })}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
  render() {
    return (
      <Card expanded={true} id="buttons">
       <CardHeader>Buttons</CardHeader>
       <CardContent>
          { this.examples() }
          { this.guidelines() }
          { this.modal() }
        </CardContent>
      </Card>
    );
  }
}
