import React from 'react';
import { Card, CardHeader, CardContent } from '../../../../src/index.js';
import Callout from '../callout/callout.component.jsx';
import { CONTENT } from './rebranding.constants';
import STATUS from '../callout/callout.constants';

export default class Rebranding extends React.Component {
  createUnorderedList = (items) => {
    let list = (
      <ul>
        {
          items.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })
        }
      </ul>
    );

    return list;
  };

  render() {
    return (
      <Card expanded={true} id="Brand">
        <CardHeader>{CONTENT.topic}</CardHeader>
        <CardContent>
          <p>{CONTENT.description}</p>
          <Callout header={CONTENT.mandatory.label} status={STATUS.ERROR}>
            { this.createUnorderedList(CONTENT.mandatory.content)}
          </Callout>

          <Callout header={CONTENT.recommended.label} status={STATUS.WARNING}>
             { this.createUnorderedList(CONTENT.recommended.content)}
          </Callout>

          <Callout header={CONTENT.adjusted.label} status={STATUS.SUCCESS}>
             { this.createUnorderedList(CONTENT.adjusted.content)}
          </Callout>
        </CardContent>
      </Card>
    );
  }
}
