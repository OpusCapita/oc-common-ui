import React from 'react';
import { Card, CardHeader, CardContent } from '../../../src/index';

function Typography() {
  return (
    <Card expanded id="typography">
      <CardHeader>Typography</CardHeader>
      <CardContent>
        <table className="table">
          <tbody>
            <tr>
              <td className="oc-font-light">Font-weight 300 light text</td>
            </tr>
            <tr>
              <td className="oc-font-normal">Font-weight 400 normal text</td>
            </tr>
            <tr>
              <td className="oc-font-bold">Font-weight 700 bold text</td>
            </tr>
            <tr>
              <td><h1>h1. Heading <small>Secondary text</small></h1></td>
            </tr>
            <tr>
              <td><h2>h2. Heading <small>Secondary text</small></h2></td>
            </tr>
            <tr>
              <td><h3>h3. Heading <small>Secondary text</small></h3></td>
            </tr>
            <tr>
              <td><h4>h4. Heading <small>Secondary text</small></h4></td>
            </tr>
            <tr>
              <td><h5>h5. Heading <small>Secondary text</small></h5></td>
            </tr>
            <tr>
              <td><h6>h6. Heading <small>Secondary text</small></h6></td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export default Typography;
