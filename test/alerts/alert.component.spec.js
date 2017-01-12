/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Alert } from 'react-bootstrap';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import sinon from 'sinon';

import { OCAlert } from '../../src/alerts/alert.component.jsx';
import { OCAlert as alertAction } from '../../src/alerts/alerts.actions.js';

describe('Alert component', function() {

  const mockStore = configureMockStore();
  let store = mockStore({
    intl: {
      locale: 'en',
      messages: {
        error_message: 'hello translated',
        some_translation: 'some translation',
        params: 'hello {param}!',
      },
    },
  });

  it('should show basic success message', () => {
    let props = {
      id: '1',
      type: 'success',
      message: 'hello!',
      translate: false,
    };
    let wrapper = mount(
        <OCAlert {...props}/>
    );
    let alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello!');
    expect(alert.props().bsStyle).to.eql('success');
    expect(alert.props().onDismiss).to.be.defined;

    let closeAlertAction = sinon.stub(alertAction, 'closeAlert');
    wrapper.find('button').at(0).simulate('click');
    expect(closeAlertAction.called).to.be.true;

    closeAlertAction.restore();
  });

  it('should show basic success message from object', () => {
    let props = {
      id: '1',
      type: 'info',
      message: [
        'message1',
        'message2',
      ],
      translate: false,
    };
    let wrapper = mount(
        <OCAlert {...props}/>
    );
    let alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('message1');
    expect(alert.text()).to.contain('message2');
    expect(alert.props().bsStyle).to.eql('info');
    expect(alert.props().onDismiss).to.be.defined;
  });

  it('should translate basic success message', () => {
    let props = {
      id: '1',
      type: 'warning',
      message: 'error_message',
      translate: true,
    };
    let wrapper = mount(
      <Provider store={store}>
        <OCAlert {...props}/>
      </Provider>
    );
    let alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello translated');
    expect(alert.props().bsStyle).to.eql('warning');
    expect(alert.props().onDismiss).to.be.defined;
  });

  it('should translate basic success message with parameters', () => {
    let props = {
      id: '1',
      type: 'success',
      message: 'params',
      translate: true,
      values: {
        param: 'world',
      },
    };
    let wrapper = mount(
      <Provider store={store}>
        <OCAlert {...props}/>
      </Provider>
    );
    let alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello world!');
    expect(alert.props().bsStyle).to.eql('success');
    expect(alert.props().onDismiss).to.be.defined;
  });

  it('should translate basic success message from object', () => {
    let props = {
      id: '1',
      type: 'danger',
      message: [
        'error_message',
        'some_translation',
      ],
      translate: true,
    };
    let wrapper = mount(
      <Provider store={store}>
        <OCAlert {...props}/>
      </Provider>
    );
    let alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello translated');
    expect(alert.text()).to.contain('some translation');
    expect(alert.props().bsStyle).to.eql('danger');
    expect(alert.props().onDismiss).to.be.defined;
  });

});
