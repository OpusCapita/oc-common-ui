import React from 'react';
import { Cards, Card, CardHeader, CardContent } from '../../../src/index';
import './cards-view.component.scss';

export default class CardsView extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
    };
  }

  setExpanded = (cardId, status) => {
    const state = this.state;
    state.expanded = status;
    this.setState(state);
  }

  render() {
    return (
      <div id="oc-cards-view">
        <Cards>
          <Card
            id="example"
            expanded={this.state.expanded}
            setExpanded={this.setExpanded}
          >
            <CardHeader>I&#39;m card header</CardHeader>
            <CardContent>I&#39;m card content</CardContent>
          </Card>
        </Cards>
      </div>
    );
  }
}
