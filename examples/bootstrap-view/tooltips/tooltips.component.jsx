import React from 'react';
import { Card, CardHeader, CardContent } from '../../../src/index.js';
import { Tooltip, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap';
import { CONTENT } from './tooltips.constants';

export default class Tooltips extends React.Component {  
  examples = () => {
    const tooltip = (
      <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );
    
    return (
      <div>
        <ButtonToolbar>
            <OverlayTrigger placement="left" overlay={tooltip}>
              <Button bsStyle="default">{ CONTENT.left }</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={tooltip}>
              <Button bsStyle="default">{ CONTENT.top }</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <Button bsStyle="default">{ CONTENT.bottom }</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="default">{ CONTENT.right }</Button>
            </OverlayTrigger>
          </ButtonToolbar>
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
      </div>
    );
  }

  render() {    
    return (
      <Card expanded={true} id="tooltips">
       <CardHeader>{ CONTENT.header }</CardHeader>
       <CardContent>          
          { this.examples() }
          { this.guidelines() }
        </CardContent> 
      </Card>
    );
  }
}
