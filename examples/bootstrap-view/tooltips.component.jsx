import React from 'react';
import { Card, CardHeader, CardContent } from '../../src/index.js';
import { Tooltip, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap';

export default class Tooltips extends React.Component {  
  render() {
    const tooltip = (
      <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );

    return (
      <Card expanded={true} id="tooltips">
       <CardHeader>Tooltips</CardHeader>
       <CardContent>
          <ButtonToolbar>
            <OverlayTrigger placement="left" overlay={tooltip}>
              <Button bsStyle="default">Tooltip on left</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={tooltip}>
              <Button bsStyle="default">Tooltip on top</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <Button bsStyle="default">Tooltip on bottom</Button>
            </OverlayTrigger>

            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="default">Tooltip on right</Button>
            </OverlayTrigger>
          </ButtonToolbar>
        </CardContent> 
      </Card>
    );
  }
}
