"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["variant", "inputSize", "radius", "color", "error", "helperText", "label", "startIcon", "endIcon", "className", "style", "rules", "defaultValue", "onChange"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var TextInput = function TextInput(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "bordered" : _ref$variant,
    _ref$inputSize = _ref.inputSize,
    inputSize = _ref$inputSize === void 0 ? "md" : _ref$inputSize,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? "md" : _ref$radius,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#006fee" : _ref$color,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    helperText = _ref.helperText,
    label = _ref.label,
    startIcon = _ref.startIcon,
    endIcon = _ref.endIcon,
    className = _ref.className,
    customStyle = _ref.style,
    _ref$rules = _ref.rules,
    rules = _ref$rules === void 0 ? [] : _ref$rules,
    defaultValue = _ref.defaultValue,
    onChange = _ref.onChange,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(defaultValue || ""),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1]; // Track the input value
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    errorMessage = _useState4[0],
    setErrorMessage = _useState4[1]; // Track validation error message

  // Validation function to handle rules
  var validateAndSetErrorMessage = function validateAndSetErrorMessage(value) {
    var _iterator = _createForOfIteratorHelper(rules),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rule = _step.value;
        var result = rule(value);
        if (result !== true) {
          setErrorMessage(result); // Set the first validation error

          return;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    setErrorMessage(null); // Clear errors if all rules pass
  };

  // Handle input changes and apply validation rules
  var handleInputChange = function handleInputChange(event) {
    var value = event.target.value;
    setInputValue(value); // Update local state with the new value

    validateAndSetErrorMessage(value); // Validate and set any error message

    // Call external onChange if provided, passing the original event
    if (onChange) {
      onChange(event);
    }
  };
  var inputStyles = "border-[1.35px] ".concat(error || errorMessage ? "border-red-500" : "border-gray-300", " focus:border-").concat(color, " focus:ring-").concat(color);
  var sizing = function sizing() {
    switch (inputSize) {
      case "xs":
        return "px-2 py-1 text-xs";
      case "sm":
        return "px-3 py-2 text-sm";
      case "md":
        return "px-4 py-2 text-md";
      case "lg":
        return "px-5 py-3 text-lg";
      case "xl":
        return "px-6 py-3 text-xl";
      default:
        return "";
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col ".concat(className)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "mb-1 ml-2 text-sm font-semibold ".concat(error || errorMessage ? "text-red-500" : "text-gray-700")
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex items-center"
  }, startIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute left-2"
  }, startIcon), /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: "\n            w-full\n            ".concat(inputStyles, "\n            ").concat(sizing(), "\n            rounded-").concat(radius, "\n            outline-none\n            transition-all\n            pl-").concat(startIcon ? 8 : 4, " pr-").concat(endIcon ? 8 : 4, "\n            ").concat(error || errorMessage ? "text-red-500" : "", "\n          "),
    style: customStyle,
    value: inputValue // Controlled value
    ,
    onChange: handleInputChange // Use custom handler
  }, props)), endIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute right-2"
  }, endIcon)), errorMessage && /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs text-red-500 mt-1 ml-2"
  }, errorMessage), !errorMessage && helperText && /*#__PURE__*/_react["default"].createElement("span", {
    className: "mt-1 ml-2 text-xs ".concat(error || errorMessage ? "text-red-500" : "text-gray-500")
  }, helperText));
};
var _default = exports["default"] = TextInput;