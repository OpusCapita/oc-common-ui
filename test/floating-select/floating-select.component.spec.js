/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { FloatingSelect } from '../../src/floating-select/index';


describe('FloatingSelect component', () => {
  it('should render correctly', () => {
    const props = {
      name: 'floating-select-example',
      options: [
        {
          value: 1,
          label: 'Item 1',
        },
        {
          value: 2,
          label: 'Item 2',
        },
      ],
      onChange: () => {},
      value: 1,
    };

    const wrapper = mount(<FloatingSelect {...props} />);
    expect(wrapper.find('input').at(0).props().name).to.eql('floating-select-example');
    wrapper.unmount();
  });
});
