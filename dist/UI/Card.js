"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nextThemes = require("next-themes");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Card = function Card(_ref) {
  var children = _ref.children,
    width = _ref.width,
    height = _ref.height,
    padding = _ref.padding,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "shadow" : _ref$variant,
    className = _ref.className,
    customStyle = _ref.style;
  var style = {
    width: width,
    height: height,
    padding: padding,
    borderRadius: "15px"
  };
  var _useTheme = (0, _nextThemes.useTheme)(),
    theme = _useTheme.theme;
  switch (variant) {
    case "shadow":
      style = _objectSpread(_objectSpread({}, style), {}, {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme === "dark" ? "#18181b" : "#ffffff",
        // tmavě šedá
        border: "1px solid #".concat(theme === "dark" ? "222" : "eee") // světle šedý border
      });
      break;
    case "bordered":
      style = _objectSpread(_objectSpread({}, style), {}, {
        border: "1px solid #".concat(theme === "dark" ? "3f3f46" : "eee") // světle šedý border
      });
      break;
    case "faded":
      style = _objectSpread(_objectSpread({}, style), {}, {
        border: "1px solid #".concat(theme === "dark" ? "3f3f46" : "eee"),
        // světle šedý border
        backgroundColor: theme === "dark" ? "#18181b" : "#ffffff" // tmavě šedá
      });
      break;
    default:
      break;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread(_objectSpread({}, style), customStyle)
  }, children);
};
var _default = exports["default"] = Card;