/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Card, CardContent, CardHeader } from '../../src/index';


describe('Card component', function describe() {
  it('should render correctly', () => {
    const props = {
      id: 'my-card',
      expanded: true,
    };
    // with one child
    let wrapper = mount(
      <Card {...props}>
        <CardContent className="only-child" />
      </Card>,
    );
    expect(wrapper.childAt(0).props()).to.eql({
      children: [],
      className: 'only-child',
      id: 'my-card',
      onlyChild: true,
      expanded: true,
      setExpanded: null,
    });

    // with multiple children
    wrapper = mount(
      <Card {...props}>
        <CardHeader />
        <CardContent className="only-child" />
      </Card>,
    );
    expect(wrapper.childAt(0).props()).to.eql({
      children: [],
      id: 'my-card',
      onlyChild: false,
      expanded: true,
      setExpanded: null,
      collapseBtnTooltip: 'collapse',
      expandBtnTooltip: 'expand',
    });
  });
});
