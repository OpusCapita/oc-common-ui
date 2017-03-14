/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Wizard } from '../../src/index';


describe('Wizard component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      save: sinon.spy(),
      cancel: sinon.spy(),
      steps: [{
        id: 'page1',
        name: 'Page 1',
        component: <div id="page1-content">Page 1 content</div>,
      }, {
        id: 'page2',
        name: 'Page 2',
        component: <div id="page2-content">Page 2 content</div>,
      }],
      localizationTexts: {
        save: 'Save',
        cancel: 'Cancel',
      },
    };

    const wrapper = mount(
      <Wizard {...props} />,
    );

    expect(wrapper.find('#page1').text()).to.eql('Page 1');
    expect(wrapper.find('#page2').text()).to.eql('Page 2');

    expect(wrapper.find('#page1-content').text()).to.eql('Page 1 content');
    expect(wrapper.find('#page2-content').length).to.eql(0);

    wrapper.find('#page2').simulate('click');

    expect(wrapper.find('#page2-content').text()).to.eql('Page 2 content');

    wrapper.find('#save-button').simulate('click');
    expect(props.save.called).to.be.true;

    wrapper.find('#cancel-button').simulate('click');
    expect(props.cancel.called).to.be.true;

    wrapper.find('#previous-step').simulate('click');
    expect(wrapper.find('#page1-content').text()).to.eql('Page 1 content');
    expect(wrapper.find('#page2-content').length).to.eql(0);

    wrapper.find('#next-step').simulate('click');
    expect(wrapper.find('#page1-content').length).to.eql(0);
    expect(wrapper.find('#page2-content').text()).to.eql('Page 2 content');
  });
});
