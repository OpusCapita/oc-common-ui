/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import { OCAlerts } from '../../src/index';
import { OCAlert } from '../../src/alerts/alert.component';


describe('Alerts component', function describe() {
  before(function before() {
    const mockStore = configureMockStore();
    this.store = mockStore({
      intl: {
        locale: 'en',
      },
      alertsReducer: [{
        id: 'alert_1',
        type: 'success',
        message: 'my success',
        translate: false,
        values: null,
      }],
    });
  });

  it('should render correctly', function it() {
    const wrapper = mount(
      <Provider store={this.store}>
        <OCAlerts />
      </Provider>,
    );
    const alert = wrapper.find(OCAlert);
    expect(alert.props()).to.eql({
      id: 'alert_1',
      type: 'success',
      message: 'my success',
      translate: false,
      values: null,
    });
  });
});
