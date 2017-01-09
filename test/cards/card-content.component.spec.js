import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { CardContent } from '../../src/index.js';


describe('CardContent component', function() {

  it('should render correctly', () => {
    const wrapper = mount(
      <CardContent>hello!</CardContent>
    );
    expect(wrapper.props().children).to.eql('hello!');
  });

});
