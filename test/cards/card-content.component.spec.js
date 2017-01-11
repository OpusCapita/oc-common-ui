import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { CardContent } from '../../src/index.js';


describe('CardContent component', function() {

  it('should render correctly', () => {
    let wrapper = mount(
      <CardContent expanded={true}>hello!</CardContent>
    );
    expect(wrapper.text()).to.eql('hello!');

    wrapper = mount(
      <CardContent>hello!</CardContent>
    );
    expect(wrapper.text()).to.eql('');
  });

});
