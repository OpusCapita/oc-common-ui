/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import { OCAlerts } from '../../src/index.js';
import { OCAlert } from '../../src/alerts/alert.component.jsx';


describe('Alerts component', function() {

  before(function() {
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

  it('should render correctly', function() {

    let wrapper = mount(
      <Provider store={this.store}>
        <OCAlerts />
      </Provider>
    );
    let alert = wrapper.find(OCAlert);
    expect(alert.props()).to.eql({
      id: 'alert_1',
      type: 'success',
      message: 'my success',
      translate: false,
      values: null,
    });
  });

});
