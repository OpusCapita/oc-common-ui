import React from 'react';
import { Card, CardHeader, CardContent } from '../../../src/index.js';
export default class Components extends React.Component {
  render() {
    return (
      <Card expanded={true} id="components">    
        <CardHeader>Components</CardHeader>
        <CardContent>
          <p>Before implementing a new component go through following checklist:</p>
          <ol>
            <li>Is there an existing common component. If comparable component is found then it could be extended?</li>
            <li>Is there an available open source component that is already use?</li>
            <li>Is there an available open source component that is not yet in use?</li>
            <li>Can the component with given features be combosed from above?</li>            
          </ol>

          <p>If none of the above criteria is met then implement a new component. 
            Add the component to the common component library if it can be used elsewhere as well.</p>
        </CardContent>
      </Card>
    );
  }
}
