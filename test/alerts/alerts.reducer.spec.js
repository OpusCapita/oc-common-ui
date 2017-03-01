/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import { expect } from 'chai';

import { alertsReducer } from '../../src/index';
import { TYPES } from '../../src/alerts/alerts.actions';


describe('alertsReducer', function describe() {
  it('should handle show action', function it() {
    const action = {
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

  it('should handle dismiss alert action', function it() {
    const initialState = [{
      id: 'alert_1',
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: 'success',
      message: 'my success',
      translate: false,
      values: null,
    }];

    const action = {
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALERT,
      id: 'alert_1',
    };

    const newState = alertsReducer(initialState, action);
    expect(newState.length).to.eql(0);
  });

  it('should handle dismiss all alerts action', function it() {
    const initialState = [{
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

    const action = {
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALL,
    };

    const newState = alertsReducer(initialState, action);
    expect(newState.length).to.eql(0);
  });
});
