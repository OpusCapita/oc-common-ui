import React from 'react';
import { Card, CardHeader, CardContent } from '../../../../src/index.js';
import Callout from '../callout/callout.component.jsx';
import CONTENT from './rebranding.constants';
import STATUS from '../callout/callout.constants';

const Rebranding = () => {
  const createUnorderedList = (items) => {
    const list = (
      <ul>
        {
          items.map(item => <li key={item.id}>{item.text}</li>)
        }
      </ul>
    );

    return list;
  };

  return (
    <Card expanded id="Brand">
      <CardHeader>{CONTENT.topic}</CardHeader>
      <CardContent>
        <p>{CONTENT.description}</p>
        <Callout header={CONTENT.mandatory.label} status={STATUS.ERROR}>
          { createUnorderedList(CONTENT.mandatory.content)}
        </Callout>
        <Callout header={CONTENT.recommended.label} status={STATUS.WARNING}>
          { createUnorderedList(CONTENT.recommended.content)}
        </Callout>
        <Callout header={CONTENT.adjusted.label} status={STATUS.SUCCESS}>
          { createUnorderedList(CONTENT.adjusted.content)}
        </Callout>
      </CardContent>
    </Card>
  );
};

export default Rebranding;

