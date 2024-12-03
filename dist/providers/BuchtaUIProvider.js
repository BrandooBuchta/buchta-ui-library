"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nextThemes = require("next-themes");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var BuchtaUIProvider = function BuchtaUIProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_nextThemes.ThemeProvider, {
    attribute: "class",
    defaultTheme: "system" // Výchozí systémové téma
    ,
    themes: ["light", "dark", "system"] // Povolena témata
  }, children);
};
var _default = exports["default"] = BuchtaUIProvider;