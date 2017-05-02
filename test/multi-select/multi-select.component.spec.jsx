/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Map } from 'immutable';

import { MultiSelect } from '../../src/index';


describe('MultiSelect component', function describe() {
  it('should render correctly', function it() {
    const props = {
      checkedItems: Map(),
      items: [
        {
          id: 1,
          text: 'Item 1',
        },
        {
          id: 2,
          text: 'Item 2',
        },
      ],
    };

    const wrapper = mount(
      <MultiSelect {...props} />,
    );

    expect(wrapper.find('.oc-multi-select-item-checkbox').length).to.eql(2);
    expect(wrapper.find('.oc-multi-select-item-text').at(0).text()).to.eql('Item 1');
  });
});
