import React from 'react';
import { Card, CardHeader, CardContent } from '../../src/index.js';
export default class Typography extends React.Component {
  render() {
    return (
      <Card expanded={true} id="typography">    
        <CardHeader>Typography</CardHeader>
        <CardContent>
        <table className="table">
          <tbody>
            <tr>
              <td><h1>h1. Bootstrap heading <small>Secondary text</small></h1></td>
            </tr>
            <tr>
              <td><h2>h2. Bootstrap heading <small>Secondary text</small></h2></td> 
            </tr> 
            <tr>
              <td><h3>h3. Bootstrap heading <small>Secondary text</small></h3></td> 
            </tr>
            <tr>
              <td><h4>h4. Bootstrap heading <small>Secondary text</small></h4></td> 
            </tr>
            <tr>
              <td><h5>h5. Bootstrap heading <small>Secondary text</small></h5></td> 
            </tr>
              <tr> 
              <td><h6>h6. Bootstrap heading <small>Secondary text</small></h6></td> 
            </tr>
          </tbody>
        </table>   
        </CardContent>
      </Card>
    );
  }
}
