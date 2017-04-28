/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */

import { values } from 'lodash';

const KEY = exports.KEY = {
  UP: 38,
  DOWN: 40,
  ESC: 27,
  ENTER: 13,
  SPACE: 32,
  J: 74,
  K: 75 };

const KEYS = exports.KEYS = values(KEY);
Object.defineProperty(exports, '__esModule', {
  value: true,
});
