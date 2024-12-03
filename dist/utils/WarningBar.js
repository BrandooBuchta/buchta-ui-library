"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var WarningBar = function WarningBar(_ref) {
  var bgColor = _ref.bgColor,
    content = _ref.content;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "min-h-[70px] w-full sm:text-xl text-md flex flex-wrap items-center justify-center gap-1 ".concat(bgColor ? bgColor : "bg-sky-600", " mb-3 py-2 font-semibold text-white")
  }, content);
};
var _default = exports["default"] = WarningBar;