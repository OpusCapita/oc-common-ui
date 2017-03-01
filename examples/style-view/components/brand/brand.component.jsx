import React from 'react';
import { Card, CardHeader, CardContent } from '../../../../src/index';
import CONTENT from './brand.constants';

function Brand() {
  return (
    <Card expanded id="Brand">
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

export default Brand;
