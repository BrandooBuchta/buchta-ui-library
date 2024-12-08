"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RemainingCounterText = function RemainingCounterText(_ref) {
  var min = _ref.min,
    max = _ref.max,
    currentState = _ref.currentState;
  var percentage = (currentState - min) / (max - min) * 100;
  return /*#__PURE__*/_react["default"].createElement("span", null, currentState, "/", max, " (", percentage.toFixed(0), "%)");
};
var _default = exports["default"] = RemainingCounterText;