import React from 'react';
import { Card, CardHeader, CardContent } from '../../src/index.js';
import { ButtonToolbar, Button} from 'react-bootstrap';

export default class Buttons extends React.Component {
  render() {
    return (
      <Card expanded={true} id="buttons">
       <CardHeader>Buttons</CardHeader>
       <CardContent>
       <div className="oc-margin-bottom">
          <ButtonToolbar>
              <Button>Default</Button>
              <Button bsStyle="primary">Primary</Button>
              <Button bsStyle="success">Success</Button>
              <Button bsStyle="info">Info</Button>
              <Button bsStyle="warning">Warning</Button>
              <Button bsStyle="danger">Danger</Button>
              <Button bsStyle="link">Link</Button>
            </ButtonToolbar>   
          </div>
          <div className="oc-margin-bottom">
            <ButtonToolbar>
              <Button disabled={true}>Default</Button>
              <Button bsStyle="primary" disabled={true}>Primary</Button>
              <Button bsStyle="success" disabled={true}>Success</Button>
              <Button bsStyle="info" disabled={true}>Info</Button>
              <Button bsStyle="warning" disabled={true}>Warning</Button>
              <Button bsStyle="danger" disabled={true}>Danger</Button>
              <Button bsStyle="link" disabled={true}>Link</Button>
            </ButtonToolbar>  
          </div>
        </CardContent> 
      </Card>
    );
  }
}
