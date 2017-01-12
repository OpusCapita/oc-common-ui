/* eslint-disable no-unused-expressions */

import { expect } from 'chai';

import { alertsReducer } from '../../src/index.js';
import { TYPES } from '../../src/alerts/alerts.actions.js';


describe('alertsReducer', function() {

  it('should handle show action', function() {
    let action = {
      id: 'alert_1',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      translate: false,
      values: null,
    };

    let newState = alertsReducer([], action);

    expect(newState).to.eql([{
      id: 'alert_1',
      type: 'success',
      message: 'my success',
      translate: false,
      values: null,
    }]);

    newState = alertsReducer(newState, action);
    expect(newState.length).to.eql(2);
  });

  it('should handle dismiss alert action', function() {
    let initialState = [{
      id: 'alert_1',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      translate: false,
      values: null,
    }];

    let action = {
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALERT,
      id: 'alert_1',
    };

    let newState = alertsReducer(initialState, action);
    expect(newState.length).to.eql(0);
  });

  it('should handle dismiss all alerts action', function() {
    let initialState = [{
      id: 'alert_1',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      translate: false,
      values: null,
    }, {
      id: 'alert_2',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      translate: false,
      values: null,
    }];

    let action = {
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALL,
    };

    let newState = alertsReducer(initialState, action);
    expect(newState.length).to.eql(0);
  });

});
