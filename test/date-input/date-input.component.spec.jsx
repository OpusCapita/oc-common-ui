/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { DateInput } from '../../src/index';

function simulateKeyPresses(element, characters) {
  for(let i = 0; i < characters.length; i++) {
    element.simulate('keyPress', {
      which: characters.charCodeAt(i),
      key: characters[i],
      keyCode: characters.charCodeAt(i)
    });
  }
}

describe('DateInput component', function describe() {
  it('should render and function correctly', function it() {
    const onChange = sinon.spy();
    const onValidate = sinon.spy();
    const props = {
      value: new Date(2017, 7, 14),
      locale: 'fi',
      dateFormat: 'DD.MM.YYYY',
      onChange: onChange,
      onValidate: onValidate,
      inputProps: {
        id: 'oc-day-picker-input',
      },
    };

    const wrapper = mount(
      <DateInput {...props} />,
    );

    const inputEl = wrapper.find('#oc-day-picker-input');

    // test input value to be correct
    expect(inputEl.prop('value')).to.eql('14.08.2017');
    expect(wrapper.state('showOverlay')).to.be.false;

    // test overlay show
    inputEl.simulate('click');
    expect(wrapper.state('showOverlay')).to.be.true;

    // test validation
    wrapper.setProps({ value: null });
    simulateKeyPresses(inputEl, '14112016');
    expect(onValidate.args[0][0]).to.be.false;
    expect(onValidate.args[1][0]).to.be.false;
    expect(onValidate.args[2][0]).to.be.false;
    expect(onValidate.args[3][0]).to.be.false;
    expect(onValidate.args[4][0]).to.be.false;
    expect(onValidate.args[5][0]).to.be.false;
    expect(onValidate.args[6][0]).to.be.false;
    expect(onValidate.args[7][0]).to.be.true;
  });
});
