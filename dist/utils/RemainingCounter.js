"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RemainingCounter = function RemainingCounter(_ref) {
  var title = _ref.title,
    subTitle = _ref.subTitle,
    min = _ref.min,
    max = _ref.max,
    currentState = _ref.currentState;
  var percentage = (currentState - min) / (max - min) * 100;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center mb-6"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold mb-2"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg mb-4"
  }, subTitle), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-[90%] bg-gray-200 rounded-full h-6 mb-4 mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-pink-500 h-6 rounded-full",
    style: {
      width: "".concat(percentage, "%")
    }
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg font-bold"
  }, currentState, " z ", max, " zb\xFDv\xE1"));
};
var _default = exports["default"] = RemainingCounter;