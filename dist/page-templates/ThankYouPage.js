"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ThankYouPage = function ThankYouPage(_ref) {
  var warningBar = _ref.warningBar,
    texts = _ref.texts,
    content = _ref.content,
    logo = _ref.logo;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-screen flex flex-col items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, warningBar), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container px-8 mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col lg:flex-row justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-7 pt-3 lg:w-1/2 w-full"
  }, texts), content)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-10"
  }, logo));
};
var _default = exports["default"] = ThankYouPage;