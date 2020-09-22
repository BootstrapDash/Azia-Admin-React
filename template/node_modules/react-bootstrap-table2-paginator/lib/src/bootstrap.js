'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootstrapContext = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// consider to have a common lib?1
var BootstrapContext = exports.BootstrapContext = _react2.default.createContext({
  bootstrap4: false
});