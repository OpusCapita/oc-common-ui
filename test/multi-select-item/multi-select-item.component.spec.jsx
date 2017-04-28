/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { MultiSelectItem } from '../../src/index';


describe('MultiSelectItem component', function describe() {
  it('should render correctly', function it() {
    const props = {
      item: {
        id: 1,
        text: 'Item 1',
      },
      isChecked: true,
    };

    const wrapper = mount(
      <MultiSelectItem {...props} />,
    );

    expect(wrapper.find('.oc-multi-select-item-text').at(0).text()).to.eql('Item 1');
    expect(wrapper.find('#1').props().checked).to.be.true;
  });
});
