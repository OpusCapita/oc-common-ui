/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Alert } from 'react-bootstrap';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import sinon from 'sinon';

import { OCAlert } from '../../src/alerts/alert.component';
import { OCAlert as alertAction } from '../../src/alerts/alerts.actions';


describe('Alert component', function describe() {
  const mockStore = configureMockStore();
  const store = mockStore({
    intl: {
      locale: 'en',
      messages: {
        error_message: 'hello translated',
        some_translation: 'some translation',
        params: 'hello {param}!',
      },
    },
  });

  it('should show basic success message', function it() {
    const props = {
      id: '1',
      type: 'success',
      message: 'hello!',
      translate: false,
    };
    const wrapper = mount(
      <OCAlert {...props} />,
    );
    const alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello!');
    expect(alert.props().bsStyle).to.eql('success');
    expect(alert.props().onDismiss).to.not.be.undefined;

    const closeAlertAction = sinon.stub(alertAction, 'closeAlert');
    wrapper.find('button').at(0).simulate('click');
    expect(closeAlertAction.called).to.be.true;

    closeAlertAction.restore();
  });

  it('should show basic success message from object', function it() {
    const props = {
      id: '2',
      type: 'info',
      message: [
        'message1',
        'message2',
      ],
      translate: false,
    };
    const wrapper = mount(
      <OCAlert {...props} />,
    );
    const alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('message1');
    expect(alert.text()).to.contain('message2');
    expect(alert.props().bsStyle).to.eql('info');
    expect(alert.props().onDismiss).to.not.be.undefined;
  });

  it('should translate basic success message', function it() {
    const props = {
      id: '3',
      type: 'warning',
      message: 'error_message',
      translate: true,
    };
    const wrapper = mount(
      <Provider store={store}>
        <OCAlert {...props} />
      </Provider>,
    );
    const alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello translated');
    expect(alert.props().bsStyle).to.eql('warning');
    expect(alert.props().onDismiss).to.not.be.undefined;
  });

  it('should translate basic success message with parameters', function it() {
    const props = {
      id: '4',
      type: 'success',
      message: 'params',
      translate: true,
      values: {
        param: 'world',
      },
    };
    const wrapper = mount(
      <Provider store={store}>
        <OCAlert {...props} />
      </Provider>,
    );
    const alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello world!');
    expect(alert.props().bsStyle).to.eql('success');
    expect(alert.props().onDismiss).to.not.be.undefined;
  });

  it('should translate basic success message from object', function it() {
    const props = {
      id: '5',
      type: 'danger',
      message: [
        'error_message',
        'some_translation',
      ],
      translate: true,
    };
    const wrapper = mount(
      <Provider store={store}>
        <OCAlert {...props} />
      </Provider>,
    );
    const alert = wrapper.find(Alert);
    expect(alert.text()).to.contain('hello translated');
    expect(alert.text()).to.contain('some translation');
    expect(alert.props().bsStyle).to.eql('danger');
    expect(alert.props().onDismiss).to.not.be.undefined;
  });
});
