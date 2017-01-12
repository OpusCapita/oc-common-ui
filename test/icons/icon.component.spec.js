import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Icon } from '../../src/index.js';


describe('Icon component', function() {

  it('should render correctly', () => {
    // This will only test the test stub defined in test.setup.js
    // Testing the real Icon component hasn't succeeded yet.
    let wrapper = mount(
      <Icon type="indicator" name="more" />
    );
    expect(wrapper.props()).to.eql({ type: 'indicator', name: 'more' });
  });

});
