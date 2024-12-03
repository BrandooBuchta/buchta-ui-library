"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nextThemes = require("next-themes");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Card = function Card(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var _useTheme = (0, _nextThemes.useTheme)(),
    resolvedTheme = _useTheme.resolvedTheme;

  // Dynamické Tailwind třídy pro light/dark theme
  var themeStyles = resolvedTheme === "dark" ? "bg-[#1c1c1c] text-[#f5f5f5] shadow-[0_8px_24px_rgba(0,0,0,0.5)] border border-[#2a2a2a]" : "bg-[#ffffff] text-[#1a1a1a] shadow-[0_8px_16px_rgba(0,0,0,0.1)] border-[0.5px] border-[#eaeaea]";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-lg p-4 overflow-hidden transition-all duration-300 ease-in-out ".concat(themeStyles, " ").concat(className)
  }, children);
};
var _default = exports["default"] = Card;