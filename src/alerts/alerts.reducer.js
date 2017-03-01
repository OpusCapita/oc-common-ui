/* eslint-disable import/prefer-default-export */

import { TYPES } from './alerts.actions';
import INITIAL_STATE from './alerts.constants';

export function alertsReducer(state = INITIAL_STATE.alerts, action) {
  switch (action.type) {
    case TYPES.PLATFORM_ALERTS_SHOW: {
      const newState = state;
      newState.push({
        id: action.id,
        type: action.alertType,
        message: action.message,
        translate: action.translate,
        values: action.values,
      });
      return JSON.parse(JSON.stringify(newState));
    }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALERT: {
      return state.filter(note => note.id !== action.id);
    }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALL: {
      return [];
    }
    default: {
      return state;
    }
  }
}
