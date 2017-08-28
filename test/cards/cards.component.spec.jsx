/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Cards, Card, CardContent } from '../../src/index';


describe('Cards component', function describe() {
  it('should render all cards', () => {
    const props = {
      setExpanded: sinon.spy(),
      showOnlyCard: '',
    };
    const wrapper = mount(
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
    expect(wrapper.childAt(0).childAt(0).props().setExpanded).to.not.be.undefined;
  });

  it('should render only one card', () => {
    const props = {
      setExpanded: sinon.spy(),
      showOnlyCard: 'card1',
    };
    const wrapper = mount(
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
