/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { List } from 'immutable';

import { MultiSelect } from '../../src/multi-select/index';


describe('MultiSelect component', function describe() {
  it('should render correctly', function it() {
    const props = {
      checkedItems: List(),
      items: [
        {
          value: 1,
          label: 'Item 1',
        },
        {
          value: 2,
          label: 'Item 2',
        },
      ],
    };

    const wrapper = mount(
      <MultiSelect {...props} />,
    );

    expect(wrapper.find('.oc-multi-select-item-checkbox').length).to.eql(2);
    expect(wrapper.find('.oc-multi-select-item-label').at(0).text()).to.eql('Item 1');
  });
});
