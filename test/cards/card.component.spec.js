import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Card, CardContent, CardHeader } from '../../src/index.js';


describe('Card component', function() {

  it('should render correctly', () => {
    let props = {
      id: 'my-card',
      expanded: true,
    };
    // with one child
    let wrapper = mount(
      <Card {...props}>
        <CardContent className="only-child" />
      </Card>
    );
    expect(wrapper.childAt(0).props()).to.eql({
      className: 'only-child',
      id: 'my-card',
      onlyChild: true,
      expanded: true,
      setExpanded: undefined,
    });

    // with multiple children
    wrapper = mount(
      <Card {...props}>
        <CardHeader />
        <CardContent className="only-child" />
      </Card>
    );
    expect(wrapper.childAt(0).props()).to.eql({
      id: 'my-card',
      onlyChild: false,
      expanded: true,
      setExpanded: undefined,
    });
  });
});
