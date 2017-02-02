import React from 'react';
import { Card, CardHeader, CardContent } from '../../../../src/index.js';
import { CONTENT } from './brand.constants';

export default class Brand extends React.Component {  
  render() {  
    return (
      <Card expanded={true} id="Brand">
        <CardHeader>{CONTENT.topic}</CardHeader>
        <CardContent>
          <strong>{CONTENT.brand.header}</strong>
          <p>{CONTENT.brand.content}</p>

          <strong>{CONTENT.whitespace.header}</strong>
          <p>{CONTENT.whitespace.content}</p>

          <strong>{CONTENT.longevity.header}</strong>
          <p>{CONTENT.longevity.content}</p>
        </CardContent> 
      </Card>
    );
  }
}
