import Immutable, { Map, List } from 'immutable';
import { TYPES } from './split-pane.actions.js';
import { INITIAL_STATE } from './split-pane.constants.js';

export function splitPaneReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.PLATFORM_SPLITPANE_RESIZE:
      return state
        .setIn(
          [action.id, 'size'],
          action.size
        );
    default:
      return state;
  }
}
