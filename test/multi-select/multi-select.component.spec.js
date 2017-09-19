/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { List } from 'immutable';
import sinon from 'sinon';

import { MultiSelect } from '../../src/multi-select/index';


describe('MultiSelect component', function describe() {
  it('should render and function correctly', function it() {
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
    const wrapper = mount(<MultiSelect {...props} />);
    expect(wrapper.find('.oc-multi-select-item-checkbox').length).to.eql(2);
    expect(wrapper.find('.oc-multi-select-item-label').at(0).text()).to.eql('Item 1');
    expect(wrapper.instance().isChecked(1, List())).to.be.false;
    let spy;
    spy = sinon.spy(wrapper.instance(), 'handleChange');
    wrapper.instance().handleChange(1, true);
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleKeyDown');
    wrapper.instance().handleKeyDown({ keyCode: 1 });
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleMouseDown');
    wrapper.instance().handleMouseDown({ value: 1, label: 'Item 1' });
    expect(spy.called).to.be.true;
  });
});
