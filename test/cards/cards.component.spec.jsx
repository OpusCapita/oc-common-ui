/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Cards, Card, CardContent } from '../../src/index';


describe('Cards component', function describe() {
  it('should render correctly', () => {
    const props = {
      setExpanded: sinon.spy(),
      showOnlyCard: '',
    };

    // Show all cards
    let wrapper = mount(
      <Cards {...props}>
        <Card id="card1" expanded>
          <CardContent />
        </Card>
        <Card id="card2" expanded>
          <CardContent />
        </Card>
      </Cards>,
    );

    expect(wrapper.find(Card).length).to.eql(2);
    expect(wrapper.childAt(0).childAt(0).props().setExpanded).to.be.defined;

    // Show only one card
    props.showOnlyCard = 'card1';
    wrapper = mount(
      <Cards {...props}>
        <Card id="card1" expanded>
          <CardContent />
        </Card>
        <Card id="card2" expanded>
          <CardContent />
        </Card>
      </Cards>,
    );

    expect(wrapper.find(Card).length).to.eql(1);
  });
});
